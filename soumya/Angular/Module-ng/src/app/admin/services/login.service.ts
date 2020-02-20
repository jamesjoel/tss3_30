import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'
import { Login } from '../model/login.interface';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  api_url = environment.api_url;
  constructor(private _http: HttpClient , private _router : Router) { }

  doLogin(obj: Login) {
    // console.log(obj);
   return this._http.post<any>(this.api_url + 'admin/login', obj);
  }

  getToken() {
    if (localStorage.getItem("token")) {
      let token = localStorage.getItem("token");
      return token;
    }
  }

  isAdminLoggedIn() {
    if (localStorage.getItem("token")) {
      return true;
    } else {
      return false;
    }
  }

  Logout() {
    localStorage.removeItem("token");
    this._router.navigate(["/admin"]);
  }

  // isAdminLoggedin() {
  //   if 
  // }
}
