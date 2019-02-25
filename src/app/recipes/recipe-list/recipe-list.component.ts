import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {

  //Telling the TS code here that the recipes variable is going to contain an array of the recipe class, so it will be an array of objects.
  recipes:Recipe[]


  // @Input() selectedRecipe: string
  // @Output() recpieItem = new EventEmitter<void>();

    // using the 'new' keyword is calling the contructor which is defined in the model file, so have to pass it the constructor params.
  constructor(private recipeService: RecipeService){}


 
    // pass the input 

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();

  }

}
