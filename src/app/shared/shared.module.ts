import { NgModule } from '@angular/core';
import {AlertComponent} from './alert/alert.component';
import {loadingSpinnerComponent} from './loading-spinner/loading-spinner.component';
import {DropdownDirective} from './dropdown.directive';
import { CommonModule } from '@angular/common';


@NgModule({

    declarations : [
        AlertComponent,
        loadingSpinnerComponent,
        DropdownDirective
    ],
    imports: [
        CommonModule
    ],
    exports:[
        AlertComponent,
        loadingSpinnerComponent,
        DropdownDirective,
        CommonModule 
    ]

})



export class SharedModule {}