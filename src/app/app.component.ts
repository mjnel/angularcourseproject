import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  recipeStatus: boolean = true
  shoppingStatus: boolean = true;

  incomingRecipe(recipeResult){
    this.recipeStatus = recipeResult;
    console.log(`recipe is: ${recipeResult}`);
  }


  incomingShopping(shoppingResult){
    this.shoppingStatus = shoppingResult;
    console.log(`Shopping is: ${shoppingResult}`);


  }


}
