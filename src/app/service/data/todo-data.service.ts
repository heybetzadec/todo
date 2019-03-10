import { Injectable } from '@angular/core';
import {Todo} from '../../list-todos/list-todos.component';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  retriveAllTodos(username) {
    return this.http.get<Todo[]>('http://localhost:8080/users/' + username + '/todos');
  }

  retriveTodo(username, id) {
    return this.http.get<Todo>('http://localhost:8080/users/' + username + '/todos/' + id);
  }

  deleteTodo(username, id) {
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  updateTodo(username, id, todo) {
    return this.http.put<Todo>('http://localhost:8080/users/' + username + '/todos/' + id, todo);
  }

  cresateTodo(username, todo) {
    return this.http.post<Todo>('http://localhost:8080/users/' + username + '/todos', todo);
  }

  createBasicAuthenticationHttpHeader() {
    const username = 'user';
    const password = 'password';
    const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  }

}
