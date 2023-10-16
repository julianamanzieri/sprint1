import { v4 as uuidV4 } from "uuid";

// Definição Task que vai descrever a estrutura da tarefa
type Task = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
};

// Seleciona os elementos HTML
const inputElement =
  document.querySelector<HTMLInputElement>(".new-task-input");
const addTaskButton =
  document.querySelector<HTMLButtonElement>(".new-task-button");
const tasksContainer = document.querySelector<HTMLElement>(".tasks-container");
const form = document.querySelector("form");

// Carrega as tarefas e as exibe
const tasks: Task[] = loadTasks();
tasks.forEach(addTask);

// Envio de formulario para add uma nova tarefa
form?.addEventListener("submit", (e) => {
  e.preventDefault();

  if (inputElement?.value === "" || inputElement?.value == null) return;

  const task: Task = {
    id: uuidV4(),
    title: inputElement.value,
    completed: false,
    createdAt: new Date(),
  };
  // add a nova tarefa ao array
  tasks.push(task);
  // salvar as tarefas
  saveTasks();
  // add a nova atrefa na lista
  addTask(task);
  // limpa o campo de entrada
  inputElement.value = "";
});

// Cria elemento HTML para exibir uma tarefa e add na lista
function addTask(task: Task) {
  const listItem = document.createElement("li");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  // marca tarefa como feita
  checkbox.addEventListener("change", () => {
    task.completed = checkbox.checked;
    saveTasks();
  });

  checkbox.type = "checkbox";
  checkbox.checked = task.completed;

  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(task.title));
  listItem.appendChild(label);
  tasksContainer?.appendChild(listItem);
}

// Armazena as tarefas
const saveTasks = () => {
  localStorage.setItem("TASKS", JSON.stringify(tasks));
};

// Recupera as tarefas salvas anteriormente
function loadTasks(): Task[] {
  const taskJson = localStorage.getItem("TASKS");
  if (taskJson == null) return [];
  return JSON.parse(taskJson);
}

// Exibe todas as tarefas existentes
function displayTasks() {
  tasks.forEach((task) => {
    addTask(task);
  });
}

// Deleta as tarefas
function removeTask(taskId: string) {
  const taskIndex = tasks.findIndex((task) => task.id === taskId);
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    saveTasks();
    displayTasks();
  }
}

// Exibe todas as tarrefas no carregamento da web
displayTasks();
