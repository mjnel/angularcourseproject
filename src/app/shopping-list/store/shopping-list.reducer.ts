// import { Ingredient } from "../../shared/ingredient.model";
// import * as ShoppingListActions from "./shopping-list.actions";

// const initialState = {
//     Ingreidents :[
//         new Ingredient('Apples', 5),
//         new Ingredient('Tomatoes', 10)
//       ]

// }

// export function shoppingListReducer (state = initialState, action:ShoppingListActions.AddIngredient){


    
//     switch (action.type){
//         case ShoppingListActions.ADD_INGREDIENT : 
//         // new object with the old data - so its okay to modify 
//         return {
//     // always return the old state.
//             ...state,
//     // clear on the type of the action because it is coming from the AddIngredient class    
//             ingreidents: [...state.Ingreidents, action.payload ]
//         } 
//         default:
//         }
//         return state;

// }





import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';

const initialState = {
  ingredients: [new Ingredient('Apples', 5), new Ingredient('Tomatoes', 10)]
};

export function shoppingListReducer(
  state = initialState,
  action: ShoppingListActions.AddIngredient
) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };
    default:
      return state;
  }
}
