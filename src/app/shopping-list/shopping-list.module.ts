import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import {ShoppingListComponent} from './shopping-list.component';
import {ShoppingEditComponent} from './shopping-edit/shopping-edit.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
    {path: 'shopping-list', component: ShoppingListComponent}
]


@NgModule({
    declarations : [
        ShoppingListComponent,
        ShoppingEditComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})




export class ShoppingListModule{}   