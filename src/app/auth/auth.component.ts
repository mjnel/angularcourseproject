import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import { AuthService, AuthResponseData } from "./auth.service";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
  })


export class AuthComponent implements OnInit{
isLogInMode:boolean = true; 
isLoading: boolean = false; 
signupForm: FormGroup; 
error: string = null; 

constructor(private authService: AuthService, private router: Router){}



onSwitchMode(){
  this.isLogInMode = !this.isLogInMode
}


ngOnInit(){
  this.signupForm = new FormGroup({
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
  });
}


onSubmit(){
//incase someone overrides the disabled attribute in the browser
  if(!this.signupForm.valid){
    return 
  }

  const email = this.signupForm.value.email;
  const password = this.signupForm.value.password;
  this.isLoading = true;
  let authObs: Observable<AuthResponseData>


  if(this.isLogInMode){
    authObs = this.authService.login(email, password);
  }else{
    authObs = this.authService.signup(email, password)
  }

  authObs.subscribe(resData =>{
    console.log(resData)
    this.isLoading = false
  },errorMessage=>{
    console.log(errorMessage)
    this.error = errorMessage;
    this.isLoading = false;
  })



  this.signupForm.reset();
  
}




}