


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  name:string="Rohit";
  fullName:string;
  email:string;
  goEmail:string="INDORE";
  constructor() { }

  ngOnInit() {
  }
  goToChild() {
    // console.log(this.email);
    this.goEmail = this.email;
  }

}
