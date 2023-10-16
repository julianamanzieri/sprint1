"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoList_js_1 = require("./todoList.js");
describe("TodoList", () => {
    let todoList;
    beforeEach(() => {
        todoList = new todoList_js_1.TodoList();
    });
    describe("When add a task", () => {
        test("Then should add a tash", () => {
            const taskDescription = "Clean your room";
            const newTask = todoList.addTask(taskDescription);
            expect(newTask.id).toBeDefined();
            expect(newTask.title).toBe(taskDescription);
            expect(newTask.completed).toBe(false);
            expect(newTask.createdAt).toBeInstanceOf(Date);
        });
    });
    describe("When should mark a task as completed", () => {
        test("Then should mark a task completed", () => {
            const taskDescription = "Go to the market";
            const newTask = todoList.addTask(taskDescription);
            const completed = todoList.completeTask(newTask.id);
            expect(completed).toBe(true);
            expect(newTask.completed).toBe(true);
        });
    });
    describe("When remove a task", () => {
        test("Then remove a task", () => {
            const taskDescription = "Clean the house";
            const newTask = todoList.addTask(taskDescription);
            const removed = todoList.removeTask(newTask.id);
            expect(removed).toBe(true);
            expect(todoList.getTasks()).not.toContain(newTask);
        });
    });
});
//# sourceMappingURL=todoList.test.js.map