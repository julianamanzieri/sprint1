"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const list = document.querySelector("#list");
const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-title");
const tasks = loadTasks();
tasks.forEach(addListItem);
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (e) => {
    e.preventDefault();
    if ((input === null || input === void 0 ? void 0 : input.value) === "" || (input === null || input === void 0 ? void 0 : input.value) == null)
        return;
    const newTask = {
        id: (0, uuid_1.v4)(),
        title: input.value,
        completed: false,
        createdAt: new Date(),
    };
    tasks.push(newTask);
    saveTasks();
    addListItem(newTask);
    input.value = "";
});
function addListItem(task) {
    const item = document.createElement("li");
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    const removeButton = document.createElement("button");
    checkbox.addEventListener("change", () => {
        task.completed = checkbox.checked;
        saveTasks();
    });
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    removeButton.className = "remove-button";
    removeButton.textContent = "Remove";
    removeButton.setAttribute("data-task-id", task.id);
    removeButton.addEventListener("click", (e) => {
        const taskId = e.target.getAttribute("data-task-id");
        if (taskId) {
            removeTask(taskId);
            item.remove();
        }
    });
    label.append(checkbox, task.title);
    item.append(label);
    list === null || list === void 0 ? void 0 : list.appendChild(item);
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
        addListItem(task);
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