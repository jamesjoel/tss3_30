import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from "@angular/forms";
import {NumMatch} from "../../helper/number.validation";
import { variable } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  user:FormGroup;
  check= false

  constructor(private _fb:FormBuilder) {
    this.user=this._fb.group({
      first_name: ["",Validators.required],
      email:      ["",[Validators.required,Validators.email]],
      contact : ["", Validators.required],
      password : ["", Validators.required],
      state: ["",Validators.required],
      city: ["",Validators.required],
      pin : ["",Validators.required],
      address : ["",Validators.required],
      company: ["",Validators.required],
      last_name: ["",Validators.required],
      industry: ["",Validators.required],

    },
    {
      validator: [NumMatch('contact')]
    }
    );
   }


  ngOnInit(): void {
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
