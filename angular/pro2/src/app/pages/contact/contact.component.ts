



import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  newName:string;
  constructor() { }

  ngOnInit() {
  }
  hello(a:string) {
    console.log("-----------", a);
    this.newName = a;
  }

}
