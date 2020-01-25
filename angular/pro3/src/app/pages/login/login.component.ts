import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
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
  constructor(private _login : LoginService, private _router : Router) { }

  ngOnInit() {
  }
  login() {
    this._login.doLogin(this.user).subscribe(result=>{
      // console.log("------",result);
      localStorage.setItem("token", result.token);
      this._router.navigate(["/dash"]);
    },
    err=>{
      // console.log("++++++",err);
      this.message=err.error.msg;
    });
  }

}
