  import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../../recipe.service';
import {Recipe} from '../../recipe.model'
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() inputRecipe: Recipe;
  @Input() index: number;
  // @Output() recpieItem = new EventEmitter<void>();
  routingVar: number;
  

  constructor(private recipeService: RecipeService,
              private router: Router){}





  ngOnInit() {
    // console.log(this.inputRecipe.id)

  }

}
