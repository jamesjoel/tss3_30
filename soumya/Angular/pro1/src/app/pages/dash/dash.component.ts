import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {

  constructor(private _user : UserService, private _router : Router) { }

  ngOnInit() {
    this._user.getUserData().subscribe(result=>{
      console.log(result);
    },
    err=>{
      this._router.navigate(["/login"]);
    }
    );
  }

}
