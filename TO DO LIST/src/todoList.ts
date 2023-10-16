import { v4 as uuidV4 } from "uuid";

export type Task = {
  id: string;
  description: string;
  completed: boolean;
};

export default class TodoList {
  private tasks: Task[] = [];

  addTask(description: string): Task {
    const task: Task = {
      id: uuidV4(),
      description,
      completed: false,
    };
    this.tasks.push(task);
    return task;
  }

  completeTask(taskId: string): boolean {
    const task = this.tasks.find((t) => t.id === taskId);
    if (task) {
      task.completed = true;
      return true;
    }
    return false;
  }

  removeTask(taskId: string): boolean {
    const index = this.tasks.findIndex((t) => t.id === taskId);
    if (index !== -1) {
      this.tasks.splice(index, 1);
      return true;
    }
    return false;
  }

  getTasks(): Task[] {
    return this.tasks;
  }
}
