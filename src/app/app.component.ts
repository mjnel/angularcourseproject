import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private authService: AuthService){}  

  // recipeStatus: boolean = true;
  // shoppingStatus: boolean = false;

  
  // incomingRecipe(recipeResult){
  //   this.recipeStatus = recipeResult;
  //   console.log(`recipe is: ${recipeResult}`);
  // }


  // incomingShopping(shoppingResult){
  //   this.shoppingStatus = shoppingResult;
  //   console.log(`Shopping is: ${shoppingResult}`);


  // }

  ngOnInit(){
    this.authService.autoLogin()
  }

}
