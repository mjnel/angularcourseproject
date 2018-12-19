import { Component, OnInit } from '@angular/core';
import { Ingreident } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

ingreidents: Ingreident[] = [
new Ingreident('Apples', 5),
new Ingreident('Tomatoes', 10)
];

  constructor() { }

  ngOnInit() {
  }

}
