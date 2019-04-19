import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingreident } from 'src/app/shared/ingredient.model';
import {ShoppingListService} from './../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild ('f')slForm: NgForm
    subscription: Subscription;
    editMode: boolean = false; 
    editItemIndex: number;
    editedItem: Ingreident;

  constructor(private slService: ShoppingListService) { }


  ngOnInit() {
   this.subscription = this.slService.startedEditing.subscribe((index: number)=>{
     this.editItemIndex = index
     this.editMode = true;
     this.editedItem = this.slService.getIngreident(index)
     this.slForm.setValue({
       'name': this.editedItem.name,
       'amount': this.editedItem.amount
     })
   })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }


  onEdit(form: NgForm){
    const value = form.value;
    // console.log(value, this.editItemIndex)
    const newIngredient = new Ingreident(value.name, value.amount)
    console.log(newIngredient)
    this.slService.editIngreident(this.editItemIndex, newIngredient)
  }


















  onAddItem(form: NgForm){
    const value = form.value;
    const newIngredient = new Ingreident(value.name, value.amount)
    this.slService.addingreident(newIngredient);
    console.log(newIngredient)
  }

  




}
