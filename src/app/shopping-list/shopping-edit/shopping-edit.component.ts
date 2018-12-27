import { Component, OnInit, ViewChild, ElementRef, OnChanges, Output, EventEmitter } from '@angular/core';
import { Ingreident } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnChanges {
  // @ViewChild('nameRef') ServerContentInput: ElementRef

  @ViewChild('nameRef') incomingName: ElementRef;
  @ViewChild('amountRef') incomingAmount: ElementRef;
  @Output() inredientAdded = new EventEmitter <Ingreident> ()

 

  onAddClick(){
    const newIngredient = new Ingreident(this.incomingName.nativeElement.value, this.incomingAmount.nativeElement.value)
    this.inredientAdded.emit(newIngredient)

  }


  ngOnChanges() {
    // console.log(`The shoppinglist array looks like: ${this.shoppingListArr}`)
  }

  constructor() { }

  ngOnInit() {
  }

}
