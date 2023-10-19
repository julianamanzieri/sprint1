import TodoList from "../todoList";
import { Task } from "../todoList"; // Importe a classe TodoList e o tipo Task

// Teste para a classe TodoList
describe("TodoList", () => {
  let todoList: TodoList;

  // Antes de cada teste, crie uma nova instância da classe TodoList
  beforeEach(() => {
    todoList = new TodoList();
  });

  // Teste para adicionar uma tarefa
  describe("When add a task", () => {
    test("Then should add a tash", () => {
      const taskDescription = "Clean your room";
      const newTask: Task = todoList.addTask(taskDescription);

      expect(newTask.id).toBeDefined();
      expect(newTask.description).toBe(taskDescription);
      expect(newTask.completed).toBe(false);
    });
  });

  // Teste para marcar uma tarefa como concluída
  describe("When should mark a task as completed", () => {
    test("Then should mark a task completed", () => {
      const taskDescription = "Go to the market";
      const newTask: Task = todoList.addTask(taskDescription);

      const completed = todoList.completeTask(newTask.id);

      expect(completed).toBe(true);
      expect(newTask.completed).toBe(true);
    });
  });

  // Teste para remover uma tarefa
  describe("When remove a task", () => {
    test("Then remove a task", () => {
      const taskDescription = "Clean the house";
      const newTask: Task = todoList.addTask(taskDescription);

      const removed = todoList.removeTask(newTask.id);

      expect(removed).toBe(true);
      expect(todoList.getTasks()).not.toContain(newTask);
    });
  });
});
