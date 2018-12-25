import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

// do I make the model here?

receivedRecipe: Recipe;



incomingRecipe  (input){
  this.receivedRecipe = input;
      console.log(`coming from the recipe component: ${input.name}`)
  }
  

  constructor() { }

  ngOnInit() {
  }

}
