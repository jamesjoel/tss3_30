import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';

import {LoginService} from '../Services/login.service';
import { Router } from '@angular/router'; 
@Injectable({
  providedIn: 'root'
})
export class LoginAuthGuard implements CanActivate {
  
  constructor(private _login: LoginService,private _router: Router) { }
  
  canActivate(){
   if(this._login.isLoggedIn()==true) {
    return true;
   } else {
    this._router.navigate(["/login"]); 
    return false;
   }
  }
  
}
