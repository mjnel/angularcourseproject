import { Component, OnInit, OnChanges,OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import {RecipeService} from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit, OnDestroy{

  //Telling the TS code here that the recipes variable is going to contain an array of the recipe class, so it will be an array of objects.
  recipes:Recipe[]
  subscription: Subscription



  constructor(private recipeService: RecipeService,
              private router: Router, 
              private route: ActivatedRoute
      ){}

  onNewReipe(){
  this.router.navigate(['new'], {relativeTo : this.route })
  
  }

 
    // pass the input 

  // ngOnInit() {

  //   this.recipeService.recipesChanged.subscribe((recipes: Recipe[])=>{
  //     console.log("got here!")
  //     this.recipes = recipes;
  //     console.log(this.recipes);
  //   })

  //   this.recipes = this.recipeService.getRecipes()



  // }


  ngOnInit() {
    console.log(this.recipeService.getRecipes())
    this.subscription = this.recipeService.recipesChanged
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
        }
      );
    this.recipes = this.recipeService.getRecipes();


}


ngOnDestroy(){
  this.subscription.unsubscribe()
}





}
