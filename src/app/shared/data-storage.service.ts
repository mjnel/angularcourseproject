import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import {map, tap} from 'rxjs/operators'


@Injectable({providedIn: 'root'})

export class DataStorageService{

constructor(private http:HttpClient, private recipesService: RecipeService){}

storeRecipes(){
const recipes = this.recipesService.getRecipes(); 
this.http.put('https://ng-course-project-ab6df.firebaseio.com/recipes.json', recipes)
    .subscribe(res=>{
    console.log(res);
    // another way of doing this would be to put the subscription into the component. This would be handy if the component needed to know about the data
})

}


fetchRecipes(){
    return this.http.get<Recipe[]>('https://ng-course-project-ab6df.firebaseio.com/recipes.json')
    // Ensuring that the array is either defined or is empty
    .pipe(map(recipes=>{
        return recipes.map(recipe =>{
            return {...recipe, Ingredients:recipe.Ingredients ? recipe.Ingredients : []}            
        });
    }), tap(recipes =>{ 
        this.recipesService.setRecipes(recipes)

    })
    )

}

}