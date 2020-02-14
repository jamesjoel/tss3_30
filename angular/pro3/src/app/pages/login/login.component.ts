import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
// import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user={
    username : "",
    password : ""
  };
  message:string;
<<<<<<< HEAD
  constructor( private _login : LoginService, private _router : Router) { }
=======
  constructor(private _login : LoginService, private _router : Router) { }
>>>>>>> dd67a6166a95ec1a3753eec6edbe23596884fd03

  ngOnInit() {
  }
  login() {
    // console.log("------", btoa("hello"));
    // console.log("------", atob("aGVsbG8="));
    this._login.doLogin(this.user).subscribe(result=>{
      // console.log("------",result);
      // let newToken = btoa(result.token);
      localStorage.setItem("token", result.token);
      this._router.navigate(["/dash"]);
    },
    err=>{
      // console.log("++++++",err);
      this.message=err.error.msg;
    });
  }
  

}
