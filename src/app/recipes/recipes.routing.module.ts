import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AuthGuard } from './../auth/auth-guard';
import { RecipesComponent } from './../recipes/recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import {recipesResolverService} from './recipes-resolver.service';


const routes: Routes =[
    { 
        path: '', 
        canActivate : [AuthGuard],
        component: RecipesComponent, children:[
            {path: '', component: RecipeStartComponent},
            {path: 'new', component:RecipeEditComponent},
            {path: ':id', component: RecipeDetailComponent, resolve: [recipesResolverService]},
            {path: ':id/edit', component:RecipeEditComponent, resolve: [recipesResolverService] }
        ]}

]

@NgModule({
    imports :[RouterModule.forChild(routes)],
    exports: [RouterModule]
})



export class RecipesRoutingModule{

}