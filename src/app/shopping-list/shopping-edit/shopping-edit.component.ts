import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingreident } from 'src/app/shared/ingredient.model';
import {ShoppingListService} from './../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private slService: ShoppingListService) { }

  @ViewChild('nameRef') incomingName: ElementRef;
  @ViewChild('amountRef') incomingAmount: ElementRef;

 

  onAddClick(){
    const newIngredient = new Ingreident(this.incomingName.nativeElement.value, this.incomingAmount.nativeElement.value)
    console.log(newIngredient);
    this.slService.addingreident(newIngredient);
    console.log(`the shopping list looks like ${this.slService.getIngridents()}`)
  }



  ngOnInit() {
  }

}
