import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Signup } from '../model/signup.interface';

@Injectable({
  providedIn: 'root'
})

export class SignupService {
  api_url = environment.api_url;
  constructor(private _http: HttpClient) { }

  addUser(obj: Signup) {
    return this._http.post<any>(this.api_url + 'signup', obj);
  }
}
