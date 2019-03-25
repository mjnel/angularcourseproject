import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import {RecipeService} from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {

  //Telling the TS code here that the recipes variable is going to contain an array of the recipe class, so it will be an array of objects.
  recipes:Recipe[]



  constructor(private recipeService: RecipeService,
              private router: Router, 
              private route: ActivatedRoute
      ){}

  onNewReipe(){
  this.router.navigate(['new'], {relativeTo : this.route })
  
  }

 
    // pass the input 

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();

  }

}
