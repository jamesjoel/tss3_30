import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http : HttpClient, private _login : LoginService) { }
  getUserData() {
    return this._http.get<any>("http://localhost:3000/api/getuser", {
      headers : { Authorization : this._login.getToken()}
    });
  }
}
