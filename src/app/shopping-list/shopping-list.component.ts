import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';
import { Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  
  constructor(private shoppingListService: ShoppingListService, private loggingService: LoggingService) { }

  ingreidents:Ingredient[] = [];
  private subscription: Subscription




  ngOnInit() {
    this.ingreidents = this.shoppingListService.getIngridents();
    this.subscription = this.shoppingListService.IngreidentChanged.subscribe((updatedIngredients:Ingredient[])=>{
      this.ingreidents = updatedIngredients;
    }) 
     this.loggingService.printLog('Hello from shopping list Component ngOnInit')
  }


ngOnDestroy(){
  this.subscription.unsubscribe();
}





  incomingItem(item:Ingredient){
    this.ingreidents.push(item);
  }




  onEditItem(index:number){
    this.shoppingListService.startedEditing.next(index)

  }






}
