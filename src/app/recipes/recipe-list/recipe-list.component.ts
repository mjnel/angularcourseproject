import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model'; 
// import { EventEmitter } from 'events';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  //Telling the TS code here that the recipes variable is going to contain an array of the recipe class, so it will be an array of objects.
  recipes:Recipe[] =[
    new Recipe('Spaghetti Bolognese', 'The best Bolognese there is', 'http://cdn.recipes100.com/v/e62c7678de0a99ce4b0bca094f87ba50.jpg'),
    new Recipe('Fajitas', 'Old El Paso Fajitas','https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F6045301_dtlet8152.jpg%3Fitok%3Dp8e70RY3&w=1000&c=sc&poi=face&q=70')

  ]


  @Input() selectedRecipe: string
  @Output () outputReceipe = new EventEmitter<string>();
  // @Output() recpieItem = new EventEmitter<void>();

    // using the 'new' keyword is calling the contructor which is defined in the model file, so have to pass it the constructor params.
 
    recipeClick(input){
      this.outputReceipe.emit(input);      
    }
 
    // pass the input 
  constructor() { }

  ngOnInit() {
  }

}
