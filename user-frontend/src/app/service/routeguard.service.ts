import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})

export class RouteguardService implements CanActivate{
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.hardcodedAuthenticationService.isUserLoggedIn()){
      return true;
    }
    this.router.navigate(['login'])
   
    return false;
  }

  constructor(private hardcodedAuthenticationService: HardcodedAuthenticationService,private router:Router) {
   }


}