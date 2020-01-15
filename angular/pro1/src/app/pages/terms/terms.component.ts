import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {

  arr = ["red", "green", "blue"];
  color="";
  
  constructor() { }

  ngOnInit() {
  }
  add() {
    this.arr.push(this.color);
  }
}
