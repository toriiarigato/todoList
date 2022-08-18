import {TodoItem} from "./todo-item-model";

export class TodoList {
  id = Date.now() + Math.round(Math.random() * 1000);
  name = '';
  todos: TodoItem[] = [];

  constructor(name: string) {
    this.name = name;
  }
}
