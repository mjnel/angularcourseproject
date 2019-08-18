import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { map, tap, take } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
 
constructor(private authService: AuthService, private router: Router){ }


canActivate(route:ActivatedRouteSnapshot, router:RouterStateSnapshot): 
boolean | Promise <boolean> | Observable <boolean>
{
return this.authService.user.pipe(
  //  we are subscriving and having the constant subscription could lead to side affects  if the guard keeps listening to subject.
  // use take 1 and then unsubscribe so not ongoing listener. use the take operator 
  take(1), 
  map(userObj =>{
  // if user then say no user = false, then  no to that is true.
  return !!userObj
}),tap ((isAuth) =>{
    if(!isAuth){
        this.router.navigate(['/auth'])
    }
  }))

}
}