import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import {ShoppingListService} from './../shopping-list.service';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
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
    editedItem: Ingredient;

    // An example of a template driven form approach.

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


  onSubmit(form: NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount)
    if(this.editMode){
      this.slService.updateIngreident(this.editItemIndex, newIngredient)
    }else{
      this.slService.addingreident(newIngredient);
   }
   this.editMode = false;
   this.slForm.reset();


  }

  onClear(){
    this.slForm.reset()
    this.editMode = false;
  }

  onDelete(){
    this.slService.deleteIngrident(this.editItemIndex)
    this.onClear()
  }

  




}
