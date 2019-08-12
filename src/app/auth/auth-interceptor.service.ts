import { Injectable, OnInit } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams } from "@angular/common/http";
import { AuthService } from "./auth.service";
import { take, exhaustMap } from "rxjs/operators";
import { Subscription } from "rxjs";


@Injectable()

export class AuthInterceptorService implements HttpInterceptor {
    private UserSub: Subscription;
    private token: string; 

    constructor(private authService: AuthService){}


    
  intercept(req:HttpRequest<any>, next: HttpHandler){

        return this.authService.user.pipe(take(1),exhaustMap(user => {
            if(!user){
                return next.handle(req)
            }
            const modifiedRequest = req.clone({params: new HttpParams().set('auth', user.token)})
            return next.handle(modifiedRequest)
        }))
    }

}