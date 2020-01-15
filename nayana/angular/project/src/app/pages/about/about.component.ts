import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  // x=10;
  y= 7;
  new = true;

  demo(){
    this.new = !this.new;

  }

  constructor() { }

  ngOnInit() {
  }

}
