
// constant same name as identifer 
// store string identider in that constant 
// typesafe way of using idenfiters 

// import { Action } from "@ngrx/store";
// // import { Ingredient } from "src/app/shared/ingredient.model";
// import { Ingredient } from "./../../shared/ingredient.model";



// export const ADD_INGREDIENT = 'ADD_INGREDIENT'

// export class AddIngredient implements Action {

//     readonly type = ADD_INGREDIENT;
//     payload: Ingredient

// }



import { Action } from '@ngrx/store';

import { Ingredient } from '../../shared/ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

export class AddIngredient implements Action {
  readonly type = ADD_INGREDIENT;
  payload: Ingredient;
}
