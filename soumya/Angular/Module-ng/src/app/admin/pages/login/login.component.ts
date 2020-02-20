import { Component, OnInit } from '@angular/core';
import { Login } from "../../model/login.interface";
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _login : LoginService , private _router : Router ) { }
msg:string;
  user: Login = {
    email: "",
    password: ""
  };

  ngOnInit() {
    $('input').focus(function () {
      $(this).parents('.form-group').addClass('focused');
    });

    $('input').blur(function () {
      var inputValue = $(this).val();
      if (inputValue == "") {
        $(this).removeClass('filled');
        $(this).parents('.form-group').removeClass('focused');
      } else {
        $(this).addClass('filled');
      }
    })
  }
  login() {
    // console.log("------==", this.user);
    this._login.doLogin(this.user).subscribe((result)=>{
      // console.log(result,result.token);
      localStorage.setItem("token",result.token)
      this._router.navigate(["/dash"]);
    },err=>{
      // console.log("error console",err.error.msgType);
      if(err.error.msgType == 'username'){
        this.msg = "This Username And Password is Incorrect";
      }else if(err.error.msgType == 'password') {
        this.msg = "This Password is Incorrect";
      }
    });
  }

}
