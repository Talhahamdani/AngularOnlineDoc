import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationService} from "../authentication.service";


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
   isAuth=false;
   constructor(private authService: AuthenticationService, private router: Router) { }

 canActivate(
   route: ActivatedRouteSnapshot,
   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   if (this.authService.isAuthenticated()) {
     return true;
   } else {
     // User is not authenticated, redirect to login page
     return this.router.createUrlTree(['/login']);
   }
 }

}
