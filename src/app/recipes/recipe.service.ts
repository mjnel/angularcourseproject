import {  Injectable } from '@angular/core';
import {Ingredient} from './../shared/ingredient.model'; 

import {Recipe} from './recipe.model'
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';


@Injectable()

export class RecipeService{

  recipesChanged = new Subject <Recipe[]>();
  

  constructor(private ShoppingListService: ShoppingListService){}


  private recipes:Recipe[] =[
        new Recipe( 'Spaghetti Bolognese', 'The best Bolognese there is',
         'http://cdn.recipes100.com/v/e62c7678de0a99ce4b0bca094f87ba50.jpg',
         [new Ingredient ('Meat', 1), new Ingredient("Veg", 5)]),

        new Recipe('Fajitas', 
        'Old El Paso Fajitas',
        'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F6045301_dtlet8152.jpg%3Fitok%3Dp8e70RY3&w=1000&c=sc&poi=face&q=70',
        [new Ingredient ('Meat', 1), new Ingredient("Wraps", 4), new Ingredient("Veg", 2)])
    
      ]
    
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


}