"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const inputElement = document.querySelector(".new-task-input");
const addTaskButton = document.querySelector(".new-task-button");
const tasksContainer = document.querySelector(".tasks-container");
const form = document.querySelector("form");
const tasks = loadTasks();
tasks.forEach(addTask);
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (e) => {
    e.preventDefault();
    if ((inputElement === null || inputElement === void 0 ? void 0 : inputElement.value) === "" || (inputElement === null || inputElement === void 0 ? void 0 : inputElement.value) == null)
        return;
    const task = {
        id: (0, uuid_1.v4)(),
        title: inputElement.value,
        completed: false,
        createdAt: new Date(),
    };
    tasks.push(task);
    saveTasks();
    addTask(task);
    inputElement.value = "";
});
function addTask(task) {
    const listItem = document.createElement("li");
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.addEventListener("change", () => {
        task.completed = checkbox.checked;
        saveTasks();
    });
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(task.title));
    listItem.appendChild(label);
    tasksContainer === null || tasksContainer === void 0 ? void 0 : tasksContainer.appendChild(listItem);
}
const saveTasks = () => {
    localStorage.setItem("TASKS", JSON.stringify(tasks));
};
function loadTasks() {
    const taskJson = localStorage.getItem("TASKS");
    if (taskJson == null)
        return [];
    return JSON.parse(taskJson);
}
function displayTasks() {
    tasks.forEach((task) => {
        addTask(task);
    });
}
function removeTask(taskId) {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        saveTasks();
        displayTasks();
    }
}
displayTasks();
//# sourceMappingURL=index.js.map