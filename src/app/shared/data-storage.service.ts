import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import {map, tap, take, exhaustMap} from 'rxjs/operators'
import { AuthService } from '../auth/auth.service';


@Injectable({providedIn: 'root'})

export class DataStorageService{

constructor(private http:HttpClient, private recipesService: RecipeService, private authService: AuthService){}

storeRecipes(){
const recipes = this.recipesService.getRecipes(); 
this.http.put('https://ng-course-project-ab6df.firebaseio.com/recipes.json', recipes)
    .subscribe(res=>{
    console.log(res);
    // another way of doing this would be to put the subscription into the component. This would be handy if the component needed to know about the data
})

}


fetchRecipes(){
   return  this.authService.user.pipe(take(1), exhaustMap(user =>{
        return this.http.get<Recipe[]>(
        'https://ng-course-project-ab6df.firebaseio.com/recipes.json'
        ).pipe(map(recipes =>{
            console.log(`at the map: `+ recipes)
            console.log(recipes)

            return recipes.map (recipe =>{
                return {
                    ...recipe, Ingredients:recipe.Ingredients ? recipe.Ingredients : []
            }
            })
        }),tap(recipes =>{ 
            console.log(`at the tap: `)
            console.log(recipes)
            this.recipesService.setRecipes(recipes)
        }))
    })
    )
}


    
}