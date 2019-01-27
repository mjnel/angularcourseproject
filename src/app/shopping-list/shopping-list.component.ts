import { Component, OnInit } from '@angular/core';
import { Ingreident } from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  
  constructor(private shoppingListService: ShoppingListService) { }

  ingreidents:Ingreident[] = [];




  ngOnInit() {
    this.ingreidents = this.shoppingListService.getIngridents();
    this.shoppingListService.IngreidentChanged.subscribe((updatedIngredients:Ingreident[])=>{
      this.ingreidents = updatedIngredients;
    }) 
  }







  incomingItem(item:Ingreident){
    this.ingreidents.push(item);
  }











}
