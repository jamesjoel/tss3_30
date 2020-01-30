import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../Services/login.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _login : LoginService) { }

  ngOnInit() {
  }
 
}
