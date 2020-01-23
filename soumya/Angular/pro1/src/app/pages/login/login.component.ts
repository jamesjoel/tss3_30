import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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
