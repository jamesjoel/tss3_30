import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
userData:any;
  constructor(private _user: UserService) { }

  ngOnInit() {
    this._user.getUser().subscribe((result) => {
      // console.log("Call Api",result);
      this.userData = result;
      // console.log(this.userData);
    });
  }


}
