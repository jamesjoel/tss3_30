import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() { }

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

}
