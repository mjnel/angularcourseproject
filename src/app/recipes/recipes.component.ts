import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers : [RecipeService]
})
export class RecipesComponent implements OnInit {


receivedRecipe: Recipe;



incomingRecipe  (input){
  this.receivedRecipe = input;
      console.log(`coming from the recipe component: ${input.name}`)
  }
  

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) =>{
        this.receivedRecipe = recipe; 
      }
    )
  }

}
