"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const taskList = [];
function showMenu() {
    inquirer_1.default
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
function addTask() {
    inquirer_1.default
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
function listTasks() {
    if (taskList.length === 0) {
        console.log("No tasks found");
    }
    else {
        console.log("List task:");
        taskList.forEach((task, index) => {
            console.log(`${index + 1}. [${task.completed ? "✔" : " "}] ${task.title}`);
        });
    }
    showMenu();
}
showMenu();
//# sourceMappingURL=cli.js.map