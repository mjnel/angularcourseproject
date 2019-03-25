import { Component, OnInit,  OnChanges } from '@angular/core';
import {RecipeService} from './../recipe.service'

import {Recipe} from './../recipe.model';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
 

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnChanges {

  incomingRecipe:Recipe
  queryParam: number; 

  constructor(private recipeService:RecipeService, 
              private route : ActivatedRoute,
              private router: Router
    ) {}


    onEdit(){
      this.router.navigate(['edit'], {relativeTo : this.route })
      // this.router.navigate(['../', this.queryParam, 'edit'], {relativeTo : this.route })
    }

  toShoppingList(input){
    this.recipeService.addIngreidentsToShoppingList(this.incomingRecipe.Ingreidents)

  }  

  ngOnInit() {

    this.route.params.subscribe((params:Params)=>{
      this.queryParam = params['id'];
      // console.log(`inside the observable data.id: ${params['id']}`);
      
      this.incomingRecipe = this.recipeService.getRecipefromArr(this.queryParam)

    })




  }

  ngOnChanges(){

  }

}
