import { NgModule } from '@angular/core';
import {AlertComponent} from './alert/alert.component';
import {loadingSpinnerComponent} from './loading-spinner/loading-spinner.component';
import {DropdownDirective} from './dropdown.directive';


@NgModule({

    declarations : [
        AlertComponent,
        loadingSpinnerComponent,
        DropdownDirective



    ]

})



export class SharedModule {}