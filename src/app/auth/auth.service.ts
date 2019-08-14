import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError,tap } from "rxjs/operators";
import { throwError, Subject,BehaviorSubject } from "rxjs";
import { User } from "./user.model";
import { Router } from "@angular/router";

// useful to define an interface to decribe the response of the data 


export interface AuthResponseData {
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string,
    registered?: boolean
}


@Injectable({
    providedIn: 'root'
})

export class AuthService {
// subscrive and get new informatoion when emitted
// behaviour subject - gives subscribers previous subscription details, so can subscribe and get data even after the user has been updated.
    user = new BehaviorSubject<User>(null);





constructor(private http: HttpClient, private router: Router ){}


 signup(email:string, password:string){
    // https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=[API_KEY]
    
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBbA5PNqnGtpuhQaKQiIRZGCrm2A6s9UY0', {
            email: email,
            password: password,
            returnSecureToken: true
        }).pipe(catchError(this.handleError), tap(resData =>{
            this.handleAuth(resData.email, resData.localId, resData.idToken, +resData.expiresIn)
        }))
    }



autoLogin(){
    const userData: {
            email: string, 
            id : string, 
            _token:string, 
            _tokenExpire:string
       } = JSON.parse(localStorage.getItem('userData')) 
       // convert to JS object  
 
    if(!userData){
        return
    }
    // going to the local storage to check if there is a user, if there isn't function returns.
    const loadedUser = new User(userData.email,userData.id, userData._token, new Date(userData._tokenExpire)); 
    // making a new user 

    if(loadedUser.token){
        this.user.next(loadedUser)
    }
    // checking if the user is valid

}





login(email:string, password:string){

  return  this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBbA5PNqnGtpuhQaKQiIRZGCrm2A6s9UY0',{
        email: email,
        password: password,
        returnSecureToken: true
    }).pipe(catchError(this.handleError),tap(resData =>{
        this.handleAuth(resData.email, resData.localId, resData.idToken, +resData.expiresIn)
    }))

    }


logout(){
    this.user.next(null);
    this.router.navigate(['/auth'])

}


 private handleAuth(email: string, localId: string, idToken: string, expiresIn: number){
        const expirationDate  = new Date(new Date().getTime()+ expiresIn * 1000)
        // getting the UNIX epoch time and adding on the amount of milli seconds which the server allows and converting back to a date object
        console.log(`expiration date is:` + expirationDate);
        const user = new User(email, localId, idToken, expirationDate);
        this.user.next(user);
        localStorage.setItem('userData',JSON.stringify(user));
}




private handleError(errorRes: HttpErrorResponse){
    // console.log(errorRes);
    let errorMessage = 'An unknown error message occured!'
    if(!errorRes.error || !errorRes.error.error){
        return throwError(errorMessage);
    }
    switch(errorRes.error.error.message){
        case 'EMAIL_EXISTS': 
        errorMessage = 'This email already exists';
         break;
        case 'EMAIL_NOT_FOUND': errorMessage = "This email isn't found"; break;
        case 'INVALID_PASSWORD': errorMessage = "Password invalid"; break;
    }
    return throwError(errorMessage)
}




}