"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
// Seleciona os elementos HTML
var inputElement = document.querySelector(".new-task-input");
var addTaskButton = document.querySelector(".new-task-button");
var tasksContainer = document.querySelector(".tasks-container");
var form = document.querySelector("form");
// Carrega as tarefas e as exibe
var tasks = loadTasks();
tasks.forEach(addTask);
// Envio de formulario para add uma nova tarefa
form === null || form === void 0 ? void 0 : form.addEventListener("submit", function (e) {
    e.preventDefault();
    if ((inputElement === null || inputElement === void 0 ? void 0 : inputElement.value) === "" || (inputElement === null || inputElement === void 0 ? void 0 : inputElement.value) == null)
        return;
    var task = {
        id: (0, uuid_1.v4)(),
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
function addTask(task) {
    var listItem = document.createElement("li");
    var label = document.createElement("label");
    var checkbox = document.createElement("input");
    // marca tarefa como feita
    checkbox.addEventListener("change", function () {
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
// Armazena as tarefas
var saveTasks = function () {
    localStorage.setItem("TASKS", JSON.stringify(tasks));
};
// Recupera as tarefas salvas anteriormente
function loadTasks() {
    var taskJson = localStorage.getItem("TASKS");
    if (taskJson == null)
        return [];
    return JSON.parse(taskJson);
}
// Exibe todas as tarefas existentes
function displayTasks() {
    tasks.forEach(function (task) {
        addTask(task);
    });
}
// Deleta as tarefas
function removeTask(taskId) {
    var taskIndex = tasks.findIndex(function (task) { return task.id === taskId; });
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        saveTasks();
        displayTasks();
    }
}
// Exibe todas as tarrefas no carregamento da web
displayTasks();
