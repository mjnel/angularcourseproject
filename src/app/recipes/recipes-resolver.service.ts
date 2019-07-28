import { Injectable } from "@angular/core";
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Recipe } from "./recipe.model";
import { DataStorageService } from "../shared/data-storage.service";

@Injectable({providedIn:'root'})


export class recipesResolverService implements Resolve <Recipe[]>{

    constructor(private dataStorageService: DataStorageService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
                console.log(`got here`)
                return this.dataStorageService.fetchRecipes()
        }


} 