import { Component, OnInit } from '@angular/core';
import { Signup } from '../../model/signup.interface';
import { SignupService } from '../../services/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  user: Signup = {
    fullName: "",
    city: "",
    age: null,
    gender: "",
    email: "",
    password: "",
    contact: null,
    birth: {
      date: null,
      month: "",
      year: null,
    }
  }
  userData:any;

  constructor(private _signup: SignupService, private router: Router) { }

  ngOnInit() {
  }

  signup() {
    // console.log(this.user);
    this._signup.addUser(this.user).subscribe(result => {
      this.userData = result;
      // console.log(this.userData);
      this.router.navigate(["/login"]);
    });
  }
}
