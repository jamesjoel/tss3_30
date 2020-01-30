import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user:any;
  constructor(private _user : UserService) { }

  ngOnInit() {
  }
  demo() {
    this._user.getUser().subscribe(result=>{
      console.log(result);
      this.user = result;
    },
    err=>{
      console.log(err);
    })
  }

}
