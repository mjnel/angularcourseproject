import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

// useful to define an interface to decribe the response of the data 


interface AuthResponseData {
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string
}


@Injectable({
    providedIn: 'root'
})

export class AuthService {

constructor(private http: HttpClient){}


 signup(email:string, password:string){
    
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBbA5PNqnGtpuhQaKQiIRZGCrm2A6s9UY0', {
            email: email,
            password: password,
            returnSecureToken: true
        })
    }




}