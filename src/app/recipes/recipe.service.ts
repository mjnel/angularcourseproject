import {  Injectable } from '@angular/core';
import {Ingreident} from './../shared/ingredient.model'; 

import {Recipe} from './recipe.model'
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()

export class RecipeService{
  

  constructor(private ShoppingListService: ShoppingListService){}


  private recipes:Recipe[] =[
        new Recipe( 'Spaghetti Bolognese', 'The best Bolognese there is',
         'http://cdn.recipes100.com/v/e62c7678de0a99ce4b0bca094f87ba50.jpg',
         [new Ingreident ('Meat', 1), new Ingreident("Veg", 5)]),

        new Recipe('Fajitas', 
        'Old El Paso Fajitas',
        'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F6045301_dtlet8152.jpg%3Fitok%3Dp8e70RY3&w=1000&c=sc&poi=face&q=70',
        [new Ingreident ('Meat', 1), new Ingreident("Wraps", 4), new Ingreident("Veg", 2)])
    
      ]
    
getRecipes(){
    return this.recipes.slice();
}

addIngreidentsToShoppingList(Ingreidents: Ingreident[]){
  this.ShoppingListService.addIngreidents(Ingreidents);
}


getRecipefromArr(index){
  return this.recipes[index]
}


// ***************************
replaceRecipe(index:number, element:Recipe){
  this.recipes[index] = element;

}

}