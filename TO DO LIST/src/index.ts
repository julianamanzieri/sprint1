// Definição Task que vai descrever a estrutura da tarefa
type Task = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
};

// Seleciona os elementos HTML
const list = document.querySelector("#list") as HTMLUListElement;
const form = document.querySelector("#new-task-form") as HTMLFormElement;
const input = document.querySelector("#new-task-title") as HTMLInputElement;

// Carrega as tarefas e as exibe
const tasks: Task[] = loadTasks();
tasks.forEach(addListItem);

// Envio de formulario para add uma nova tarefa
form?.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input?.value === "" || input?.value == null) return;

  const newTask: Task = {
    id: Math.random().toString(),
    title: input.value,
    completed: false,
    createdAt: new Date(),
  };
  // add a nova tarefa ao array
  tasks.push(newTask);
  // salvar as tarefas
  saveTasks();
  // add a nova atrefa na lista
  addListItem(newTask);
  // limpa o campo de entrada
  input.value = "";
});

// Cria elemento HTML para exibir uma tarefa e add na lista
export function addListItem(task: Task) {
  const item = document.createElement("li");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  // const removeButton = document.createElement("button");
  // marca tarefa como feita
  checkbox.addEventListener("change", () => {
    task.completed = checkbox.checked;
    saveTasks();
  });

  checkbox.type = "checkbox";
  checkbox.checked = task.completed;

  // Configuração do botão "Remover"
  const removeButton = document.createElement("button");
  removeButton.className = "remove-button";
  removeButton.textContent = "Remove";
  removeButton.setAttribute("data-task-id", task.id);

  // Ouvinte de evento de clique para o botão "Remover"
  removeButton.addEventListener("click", (e) => {
    const taskId = (e.target as HTMLElement).getAttribute("data-task-id");
    if (taskId) {
      removeTask(taskId);
      item.remove();
    }
  });

  // Add elementos a lista
  label.append(checkbox, task.title);
  item.append(label);
  list?.appendChild(item);
  label.append(removeButton);
}

// Armazena as tarefas
const saveTasks = () => {
  localStorage.setItem("TASKS", JSON.stringify(tasks));
};

// Recupera as tarefas salvas anteriormente
export function loadTasks(): Task[] {
  const taskJson = localStorage.getItem("TASKS");
  if (taskJson == null) return [];
  return JSON.parse(taskJson);
}

// Exibe todas as tarefas existentes
export function displayTasks() {
  tasks.forEach((task) => {
    addListItem(task);
  });
}

// Deleta as tarefas
export function removeTask(taskId: string) {
  const taskIndex = tasks.findIndex((task) => task.id === taskId);
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    saveTasks();
    displayTasks();
  }
}

// Exibe todas as tarrefas no carregamento da web
displayTasks();
