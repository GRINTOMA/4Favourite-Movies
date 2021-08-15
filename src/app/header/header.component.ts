import { Component, OnInit, Input } from '@angular/core';
import { Grintoma } from '../my_classes/grintoma';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  @Input() headerInfo: Grintoma;

  constructor() {}

  ngOnInit(): void {
  }

}
