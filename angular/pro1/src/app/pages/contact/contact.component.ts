import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // x = 10;
  y = true;
  constructor() { }

  ngOnInit() {
  }
  demo() {
    // this.y=false;
    this.y = !this.y;
  }

}
