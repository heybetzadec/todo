import { Injectable } from '@angular/core';
import {Todo} from '../../list-todos/list-todos.component';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  retriveTodos(username) {
    return this.http.get<Todo[]>('http://localhost:8080/users/' + username + '/todos');
  }

}