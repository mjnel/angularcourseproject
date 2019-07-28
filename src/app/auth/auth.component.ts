import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
  })


export class AuthComponent implements OnInit{
isLogInMode:boolean = true; 
signupForm: FormGroup; 

constructor(private authService: AuthService){}



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
 
  if(this.isLogInMode){
    console.log("got here")
  }else{
    this.authService.signup(email,password).subscribe((res)=>{
      console.log(res);
    },(error)=>{
      console.log(error)
    })
  }

  this.signupForm.reset();
  
}




}