import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      email : ["", [Validators.required, Validators.email]]
    });


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
