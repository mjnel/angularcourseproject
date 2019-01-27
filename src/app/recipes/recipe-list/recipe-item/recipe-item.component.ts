import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../../recipe.service';
import {Recipe} from '../../recipe.model'

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() inputRecipe: Recipe;
  // @Output() recpieItem = new EventEmitter<void>();

  constructor(private recipeService: RecipeService ){}

     recipeItemFunction(){
      this.recipeService.recipeSelected.emit(this.inputRecipe);
      //  this.recpieItem.emit()
  }



  ngOnInit() {
  }

}
