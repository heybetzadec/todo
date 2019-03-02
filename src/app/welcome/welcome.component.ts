import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WelcomeDataService} from '../service/data/welcome-data.service';
import {parseHttpResponse} from 'selenium-webdriver/http';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = '';
  private welcomeMessageFromService = '';
  constructor(private route: ActivatedRoute, private service: WelcomeDataService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params.name;
  }

  getWelcomeMessage() {
    console.log(this.service.executeHelloworldBeanService());
    this.service.executeHelloworldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
  }

  handleSuccessfulResponse(response) {
    this.welcomeMessageFromService = response.message;
  }

  handleError(error) {
    console.log(error);
    console.log(error.error);
    console.log(error.error.message);
    this.welcomeMessageFromService = error;
  }

}
