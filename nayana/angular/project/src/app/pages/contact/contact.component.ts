import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  name = "rohit";
  arr = ["red","black","blue","yellow"];
  data = [
    {
      name : "mohit",
      age : 25,
      address : "abc"

    },
    {
      name : "rohit",
      age : 23,
      address : "xyz"

    },
    {
      name : "isha",
      age : 24,
      address : "pqr"

    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
