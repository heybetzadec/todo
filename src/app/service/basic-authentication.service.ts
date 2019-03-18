import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HelloWorldBenan} from './data/welcome-data.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

   authenticate(username, password) {
    if (username === 'test' && password === 'test') {
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    } else {
      return false;
    }
  }

  executeBasicAuthenticationService(username, password) {
    const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    const headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });

    return this.http.get<AuthenticationBean>(`http://localhost:8080/basicauth`, {headers}).pipe(
      map(
        data => {
          console.log(data);
          sessionStorage.setItem('authenticaterUser', username);
          return data;
        }
      )
    );
  }


  isUserLoggedIn() {
    const user = sessionStorage.getItem('authenticatedUser');
    return user !== null;
  }

}

export class AuthenticationBean {
  constructor(public message: string) {}
}
