import {Ingreident} from './../shared/ingredient.model';
import { Subject } from 'rxjs';


export class ShoppingListService{
    // mamnaghe list of ingedietns + add ingreditent method currently in shopping list c
    IngreidentChanged = new Subject <Ingreident[]>()
    startedEditing = new Subject <number>()
    
   private ingreidents: Ingreident[] = [
        new Ingreident('Apples', 5),
        new Ingreident('Tomatoes', 10)
      ];
    

    addingreident (incomingIngreident :Ingreident){
        this.ingreidents.push(incomingIngreident);
        this.IngreidentChanged.next(this.ingreidents.slice())
    }

    getIngridents (){
        return this.ingreidents.slice();
        
    }

    getIngreident(index: number){
        return this.ingreidents[index];
    }

    addIngreidents(Ingreidents: Ingreident[]){

        this.ingreidents.push(...Ingreidents);
        this.IngreidentChanged.next(this.ingreidents.slice());


    }


}