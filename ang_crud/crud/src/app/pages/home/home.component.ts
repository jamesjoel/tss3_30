import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  test:any={
    name : ""
  };


  x="indore";
  constructor() { }

  ngOnInit() {
  }
  recChild(a:any){
    // console.log(a);
    this.test = a;
  }
  hello() {
    this.test.name = this.x;
    
    // this.test.name=x;
    

  }

}
