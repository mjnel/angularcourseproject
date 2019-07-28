import { Component } from "@angular/core";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
  })


export class AuthComponent{
isLogInMode:boolean = true; 

onSwitchMode(){
  this.isLogInMode = !this.isLogInMode
}

}