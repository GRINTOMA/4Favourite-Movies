import { Component} from '@angular/core';
import {Grintoma} from "./my_classes/grintoma";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'GRINTOMAA3';
  bio:Grintoma = {
    sid:991345926, 
    sname: "Matthew Grinton",
    slogin: "GRINTOMA", 
    scampus: "Trafalgar",
    stitle: "Assignment 3"
  }
}
