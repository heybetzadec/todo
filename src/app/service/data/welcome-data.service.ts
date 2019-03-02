import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class  HelloWorldBenan {
  constructor(public message: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloworldBeanService() {
    return this.http.get<HelloWorldBenan>('http://localhost:8080/hello-world-bean/');
  }

}
