import {Ingredient} from './../shared/ingredient.model';
import { Subject } from 'rxjs';


export class ShoppingListService{
    // mamnaghe list of ingedietns + add ingreditent method currently in shopping list c
    IngreidentChanged = new Subject <Ingredient[]>()
    startedEditing = new Subject <number>()
    
   private ingreidents: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
      ];
    

    addingreident (incomingIngreident :Ingredient){
        this.ingreidents.push(incomingIngreident);
        this.IngreidentChanged.next(this.ingreidents.slice())
    }

    getIngridents (){
        return this.ingreidents.slice();
        
    }

    getIngreident(index: number){
        return this.ingreidents[index];
    }

    addIngreidents(Ingreidents: Ingredient[]){
        this.ingreidents.push(...Ingreidents);
        this.IngreidentChanged.next(this.ingreidents.slice());
    }

    updateIngreident(index: number, changedIngreident: Ingredient){   
        this.ingreidents[index] = changedIngreident;
        this.IngreidentChanged.next(this.ingreidents.slice());
    }

    deleteIngrident(index: number){
        console.log(index)
        this.ingreidents.splice(index, 1)
        this.IngreidentChanged.next(this.ingreidents.slice())
    }


}