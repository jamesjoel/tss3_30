import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  name = "rohit";
  arr=["red", "green", "blue", "yellow"];
  data = [
    {
      name : "rohit",
      age : 25,
      city :"indore"
    },
    {
      name : "james",
      age : 26,
      city : "bhopal"
    },
    {
      name : "gaurav",
      age : 24,
      city : "Mumbai"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
