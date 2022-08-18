import { Injectable } from '@angular/core';
import {TodoList} from "../../models/todo-list-model";
import {TodoItem} from "../../models/todo-item-model";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  L_KEY_TODO_LIST = 'todo-list';

  todoListArray: TodoList[] = [];

  constructor() {

  }

  getTodoLists(){
    const todoListString = localStorage.getItem(this.L_KEY_TODO_LIST);
    if(todoListString){
      this.todoListArray = JSON.parse((todoListString));
    }else {
      this.todoListArray = [];
    }
    return this.todoListArray;
  }

  addList(listName){
    this.todoListArray.push(new TodoList(listName));
    localStorage.setItem(this.L_KEY_TODO_LIST, JSON.stringify(this.todoListArray));
  }

  addListItem(listId, itemName){
    const listObject = this.todoListArray.filter(listItem => listItem.id === listId)[0];
    listObject.todos.push(new TodoItem(itemName));
    localStorage.setItem(this.L_KEY_TODO_LIST, JSON.stringify(this.todoListArray));
  }
}

/*const todoList = new TodoList('default');
todoList.todos.push(new TodoItem('Something to do'));
todoList.todos.push(new TodoItem('Another one'));
todoList.todos.push(new TodoItem('Another other one'));
console.log(todoList);

const todoList2 = new TodoList('work');
todoList2.todos.push(new TodoItem('Something to do'));
todoList2.todos.push(new TodoItem('Another one'));
console.log(todoList2);

const todoList3 = new TodoList('personnal');
console.log(todoList3);

this.todoListArray.push(todoList);
this.todoListArray.push(todoList2);
this.todoListArray.push(todoList3);/*/
