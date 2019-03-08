import { Component, OnInit } from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';
import {Router} from '@angular/router';


export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  mesaagge: string;

  todos: Todo[] = [];
  //   [
  //   new Todo(1, 'Learnn to dance', true, new Date()),
  //   new Todo(1, 'Learnn to dance', true, new Date()),
  //   new Todo(1, 'Learnn to dance', true, new Date())
  // ];
  constructor(private todoService: TodoDataService, private router: Router) { }

  ngOnInit() {
     this.todoService.retriveTodos('abeja').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    );
  }

  refreshTodos(){
    this.todoService.retriveTodos('abeja').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    );
  }

  deleteTodo(id) {
    console.log(`${id} deleted`);
    this.todoService.deleteTodo('abeja', id).subscribe(
      response => {
        this.mesaagge = `Delete of Todo ${id} succesful!`;
        this.refreshTodos();
      }
    );
  }

  updateTodo(id: number) {
    this.router.navigate(['todo', id]);
  }
}
