import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  api_url = environment.api_url;
  constructor(private _http: HttpClient, private _login: LoginService) { }

  getUser() {
    // console.log(this._login.getToken());
  return  this._http.get<any>(this.api_url+'getuser', {
      headers: { Authorization: this._login.getToken() }
    });
  }
}
