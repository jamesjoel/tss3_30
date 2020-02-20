import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private _login: LoginService, private _router: Router) { }

  canActivate() {
    if (this._login.isAdminLoggedIn() == true) {
      return true;
    } else {
      this._router.navigate(["/admin"]);
      return false;
    }
  }

}
