import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


@Output() recipeSend = new EventEmitter<boolean>();
@Output() shoppingSend = new EventEmitter<boolean>();


  recipeCall(){
    this.recipeSend.emit(true)
    this.shoppingSend.emit(false)
  
  }
  

  shoppingCall(){
    this.shoppingSend.emit(true);
    this.recipeSend.emit(false);

  }

  constructor() { }

  ngOnInit() {
  }

}
