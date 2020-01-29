import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router'; // for redirection...
import {Login} from '../model/login.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http : HttpClient,private _router : Router ) { }

  doLogin(obj:Login) {
  return this._http.post<Login>("http://localhost:3000/api/login",obj);
  }  

  isLoggedIn() {
    if(localStorage.getItem("token")){
      return true;
    } else {
      return false;
    }
  }

  getToken() {
    return localStorage.getItem("token");
  }

  logout() {
    localStorage.removeItem("token");
    this._router.navigate(["/login"]);
  }
}