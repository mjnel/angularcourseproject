import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() inputRecipe: string
  @Output() recpieItem = new EventEmitter<void>();



     recipeItemFunction(){
       this.recpieItem.emit()
  }


  constructor() { }

  ngOnInit() {
  }

}
