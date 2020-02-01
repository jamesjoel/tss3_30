import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Match } from '../../helpers/match.validation';
import { NumMatch } from '../../helpers/number.validation';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user:FormGroup;
  check = false;
  constructor(private _fb : FormBuilder) {

    this.user = this._fb.group({
      f_name : ["", Validators.required],
      email : ["", [Validators.required, Validators.email]],
      password : ["", Validators.required],
      rePassword : ["", Validators.required],
      contact : ["", Validators.required]
    },
      {
        validator: [Match('password', 'rePassword'), NumMatch('contact')]

      }
    );


   }

  ngOnInit() {
  }

  save() {
    console.log("hello");
    this.check=true;
    if(this.user.invalid){
      return false;
    }
    console.log(this.user.value);
  }

}
