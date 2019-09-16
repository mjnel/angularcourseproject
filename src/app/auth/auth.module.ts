import  {NgModule} from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import {AuthComponent} from './auth.component'; 
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations : [
        AuthComponent
    ],
    imports :[
        ReactiveFormsModule,
        CommonModule,
        FormsModule,
        SharedModule    

    ],
    exports:[AuthComponent]
})



export class AuthModule {


}