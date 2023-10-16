"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class TodoList {
    constructor() {
        this.tasks = [];
    }
    addTask(description) {
        const task = {
            id: (0, uuid_1.v4)(),
            description,
            completed: false,
        };
        this.tasks.push(task);
        return task;
    }
    completeTask(taskId) {
        const task = this.tasks.find((t) => t.id === taskId);
        if (task) {
            task.completed = true;
            return true;
        }
        return false;
    }
    removeTask(taskId) {
        const index = this.tasks.findIndex((t) => t.id === taskId);
        if (index !== -1) {
            this.tasks.splice(index, 1);
            return true;
        }
        return false;
    }
    getTasks() {
        return this.tasks;
    }
}
exports.default = TodoList;
//# sourceMappingURL=todoList.js.map