import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http : HttpClient, private _router : Router) { }

  doLogin(obj:any) {
    return this._http.post<any>("http://localhost:3000/api/login", obj);
  }
  //AXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBaQ0k2SWpWbE1EQmhNekU1TXpjMlpUTTNNbUpoTURkbFpEa3dNeUlzSW01aGJXVWlPaUpTYjJocGRDSXNJbWxoZENJNk1UVTRNREl4TlRjMk15d2laWGh3SWpveE5UZ3dNakU1TXpZemZRLjdKVXlQc254bkVfN0VrR2R2NVB0NXNPSlVpMDNXV3BVdzlzQlBYbUR4SUU=
  isLoggedIn() {
    if(localStorage.getItem("token")){
      // return true;

      let newToken = atob(localStorage.getItem("token"));
      
      this._http.get<any>("http://localhost:3000/api/verifytoken", {
        headers : { Authorization : newToken }
      }).subscribe(result=>{
        return true;
      }, 
    err=>{
      console.log("-----")
      return false;
      
    });
  } else {
    return false;
  }
    
  }
  getToken() {
    if (localStorage.getItem("token")) {
    let newToken = atob(localStorage.getItem("token"));
    return newToken;
    }
  }
  logout() {
    localStorage.removeItem("token");
    this._router.navigate(["/login"]);
  }


}
