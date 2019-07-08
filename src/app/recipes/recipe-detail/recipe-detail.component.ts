import { Component, OnInit,  OnChanges, DoCheck, OnDestroy } from '@angular/core';
import {RecipeService} from './../recipe.service'

import {Recipe} from './../recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

 

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent implements OnInit {

  incomingRecipe:Recipe
  queryParam: number; 
  subscription: Subscription


  constructor(private recipeService:RecipeService, 
              private route : ActivatedRoute,
              private router: Router
    ) {}


    onEdit(){
      this.router.navigate(['edit'], {relativeTo : this.route })
      // this.router.navigate(['../', this.queryParam, 'edit'], {relativeTo : this.route })
    }


    onDelete(){
      this.recipeService.deleteRecipe(this.queryParam);
      this.router.navigate(['/recipes'])

    }

  toShoppingList(input){
    this.recipeService.addIngreidentsToShoppingList(this.incomingRecipe.Ingredients)

  }  

  ngOnInit() {

    
   this.route.params.subscribe((params:Params)=>{
      this.queryParam = params['id'];     
      this.incomingRecipe = this.recipeService.getRecipefromArr(this.queryParam)
    })


  }




}
