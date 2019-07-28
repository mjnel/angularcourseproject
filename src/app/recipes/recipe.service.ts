import {  Injectable } from '@angular/core';
import {Ingredient} from './../shared/ingredient.model'; 

import {Recipe} from './recipe.model'
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';


@Injectable()

export class RecipeService{

  recipesChanged = new Subject <Recipe[]>();
  

  constructor(private ShoppingListService: ShoppingListService){}

  // private recipes: Recipe [];

 private recipes: Recipe[] = [];
    
getRecipes(){
    return this.recipes.slice();
}

addIngreidentsToShoppingList(Ingreidents: Ingredient[]){
  this.ShoppingListService.addIngreidents(Ingreidents);
}


getRecipefromArr(index){
  return this.recipes[index]
}


// ***************************  

addRecipe(recipe: Recipe){
  this.recipes.push(recipe);
  this.recipesChanged.next(this.recipes.slice())
  console.log(`coming from the add ${this.recipes.slice()}`)

}

updateRecipe(index:number, newRecipe:Recipe){
   console.log("updated recipe coming from the update:")
   console.log(newRecipe)
  this.recipes[index] = newRecipe;
  this.recipesChanged.next(this.recipes.slice())

}

deleteRecipe(index:number){
  this.recipes.splice(index,1);
  this.recipesChanged.next(this.recipes.slice())  
}

setRecipes(recipes: Recipe[]){
  this.recipes = recipes;
  this.recipesChanged.next(this.recipes.slice());
}


}