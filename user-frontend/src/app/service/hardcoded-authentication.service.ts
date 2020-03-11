import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username,passworsd){
    console.log('before ' + this.isUserLoggedIn())
    if(username==='Anirban' && passworsd==='gg'){
      sessionStorage.setItem('authenticatedUser',username);
      console.log('after ' + this.isUserLoggedIn())
      return true;
    }
   return false;
  }

  isUserLoggedIn(){
    let user=  sessionStorage.getItem('authenticatedUser');
    return !(user===null);
  }
  logOut(){
    sessionStorage.removeItem('authenticatedUser');
  }
}
