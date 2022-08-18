import { Component, OnInit } from '@angular/core';
import {TodoList} from "../../models/todo-list-model";
import {TodoService} from "../../services/todo/todo.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  todoListArray: TodoList[];
  selectedTodoList: TodoList;

  constructor(private todoService : TodoService) {
  }
  ngOnInit(): void {
    this.todoListArray = this.todoService.getTodoLists();
    this.selectedTodoList = this.todoListArray[0];
  }

  selectedTodolists(todoList) {
    this.selectedTodoList = todoList
  }

  onListAdded(){
    if(this.todoListArray.length === 1){
      this.selectedTodoList = this.todoListArray[0];
    }
  }


}
