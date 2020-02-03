import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passMatch } from '../../helper/passMatch.validation';
declare var $: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
user:FormGroup;
check:boolean=false;
  constructor(private _fb: FormBuilder) {
    this.user = this._fb.group({
      f_name : ["", Validators.required],
      email : ["", [Validators.required, Validators.email]],
      contact : ["", Validators.required],
      password : ["", Validators.required],
      rePassword : ["", Validators.required],
      address : ["",[Validators.required]],
      gender : ["",[Validators.required]],
      city : ["",[Validators.required]]
    },
    {
      validator : [passMatch("password","rePassword")]
    }
    );
   }

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
  });
  }

submit(){
  this.check = true;
  if(this.user.invalid){
    return false;
  }
console.log(this.user.value);
}


}
