import {Ingreident} from './../shared/ingredient.model';
import { EventEmitter } from '@angular/core';


export class ShoppingListService{
    // mamnaghe list of ingedietns + add ingreditent method currently in shopping list c
    IngreidentChanged = new EventEmitter <Ingreident[]>()
    
   private ingreidents: Ingreident[] = [
        new Ingreident('Apples', 5),
        new Ingreident('Tomatoes', 10)
      ];
    

    addingreident (incomingIngreident :Ingreident){
        this.ingreidents.push(incomingIngreident);
        this.IngreidentChanged.emit(this.ingreidents.slice())
    }

    getIngridents (){
        return this.ingreidents.slice();
        
    }


}