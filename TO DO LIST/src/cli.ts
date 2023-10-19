import inquirer from "inquirer";

// Estrutura da tarefa
type Task = {
  title: string;
  completed: boolean;
};

// Array que contera objetos do tipo task
const taskList: Task[] = [];

// Define o menu interativo no termnal e o then e chamado com as respostas
function showMenu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "Choose an option:",
        choices: ["Add task", "List task", "Exit"],
      },
    ])
    .then((answers) => {
      switch (answers.choice) {
        case "Add task":
          addTask();
          break;
        case "List task":
          listTasks();
          break;
        case "Exit":
          console.log("Exit CLI");
          break;
      }
    });
}

// Solicita inserir a tarefa e armazena nas respostas
function addTask() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "Enter the task title",
      },
    ])
    .then((answers) => {
      taskList.push({ title: answers.title, completed: false });
      console.log("Task added successfully");
      showMenu();
    });
}

// Lista as tarefas e armazena em taskList
function listTasks() {
  if (taskList.length === 0) {
    console.log("No tasks found");
  } else {
    console.log("List task:");
    taskList.forEach((task, index) => {
      console.log(
        `${index + 1}. [${task.completed ? "✔" : " "}] ${task.title}`
      );
    });
  }
  showMenu();
}

showMenu();
