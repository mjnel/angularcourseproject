import { Component, OnInit,ViewChild, ElementRef, OnChanges } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnChanges {
  @ViewChild('nameRef') ServerContentInput: ElementRef


    ngOnChanges(){
      // console.log(`server content input is: ${this.ServerContentInput}`)
    }


  // nameInput(input){
  //   console.log(`the name is: ${input}`)
  // }


  // amountInput(input){
  //   console.log(`the amount is: ${input}`)
  // }




  constructor() { }

  ngOnInit() {
  }

}
