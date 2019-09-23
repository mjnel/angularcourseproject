import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import {ShoppingListComponent} from './shopping-list.component';
import {ShoppingEditComponent} from './shopping-edit/shopping-edit.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LoggingService } from '../logging.service';



const routes: Routes = [
    {path: '', component: ShoppingListComponent}
]


@NgModule({
    declarations : [
        ShoppingListComponent,
        ShoppingEditComponent
    ],
    imports:[  
        FormsModule,
        RouterModule.forChild(routes),
        SharedModule
    ],
    exports: [RouterModule],
    providers:[LoggingService]

})




export class ShoppingListModule{}   