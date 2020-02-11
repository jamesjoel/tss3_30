import { Component, OnInit } from '@angular/core';
import { Login } from '../../model/login.interface';
import { LoginService } from "../../services/login.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: Login = {
    username: "",
    password: ""
  };
  message: string;
  constructor(private _login: LoginService, private _router: Router) { }

  ngOnInit() {
  }

  login() {

    this._login.doLogin(this.user).subscribe(result => {
      localStorage.setItem("token", result.encryptToken);
      this._router.navigate(["/employee"]);
    }, err => {
      // console.log(err);
      if (err.error.msgType == "username") {
        this.message = "This Username and Password is Incorrect";
      } else {
        this.message = "This Password is Incorrect";
      }
    });
  }
}
