import { Component, OnInit, OnChanges } from '@angular/core';
import { Ingreident } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnChanges {

  ingreidents: Ingreident[] = [
    new Ingreident('Apples', 5),
    new Ingreident('Tomatoes', 10)
  ];


  incomingItem(item:Ingreident){
    this.ingreidents.push(item);
  }






  ngOnChanges(){
    // console.log(`the receipe name is: ${this.recipeName}`)
  }

constructor() { }

ngOnInit() {
}

}
