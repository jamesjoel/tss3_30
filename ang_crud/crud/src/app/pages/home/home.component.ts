import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ChomeComponent } from '../../shared/chome/chome.component';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild(ChomeComponent, { static : false }) demo : ChomeComponent;

  test:any={
    name : ""
  };
  z:string;

  ngAfterViewInit(){
    console.log(this.demo.a);
    this.z = this.demo.a;
    this._ref.detectChanges();
  }

  x="indore";
  constructor(private _ref : ChangeDetectorRef, private _title : Title) {
    this._title.setTitle("Home Page");
   }

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
