import  {NgModule} from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router'


import {AuthComponent} from './auth.component'; 
import { SharedModule } from '../shared/shared.module';

const routes: Routes =[
    {path: 'auth', component: AuthComponent}
]



@NgModule({
    declarations : [
        AuthComponent
    ],
    imports :[
        ReactiveFormsModule,
        CommonModule,
        FormsModule,
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports:[AuthComponent]
})



export class AuthModule {


}