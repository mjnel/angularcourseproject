import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {RecipeService} from './../recipe.service'

import {Recipe} from './../recipe.model';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnChanges {

  @Input() incomingRecipe:Recipe

  constructor(private recipeService:RecipeService ) { }


  toShoppingList(input){
    this.recipeService.addIngreidentsToShoppingList(this.incomingRecipe.Ingreidents)

  }  

  ngOnInit() {


  }

  ngOnChanges(){

  }

}
