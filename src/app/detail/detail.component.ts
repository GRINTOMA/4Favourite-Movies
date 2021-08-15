import { Component, OnInit } from '@angular/core';
import {Movie} from '../my_classes/movieInfo';
import {movieList} from '../Movies/movieList.json';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  movies:Movie[];
  index:number;

  constructor() {
    this.index = 0;
    this.movies = JSON.parse(JSON.stringify(movieList));
   }
  ngOnInit(): void {
  }
  selectMovie(i:number){
    this.index = i;
  }
}
