import { Component, OnInit, OnChanges, DoCheck, AfterViewInit, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges, DoCheck, AfterViewInit, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy  {
  title = 'pro3';
  constructor(private _login : LoginService) {
    // this._login.checkToken();
   }

   ngOnInit() {
    //  console.log("------- ONINIT");
    this._login.checkToken();
   }

  ngOnChanges() {
    console.log("---------- ONCHANGES");
  } 

  ngDoCheck() {
    console.log("---------- DOCHANGES");
  } 
  ngAfterViewInit() {
    console.log("---------- AFTER VIEW INIT");
    
  }
  ngAfterContentChecked() {
    console.log("---------- AFTER CONTENT CHECKED");
    // this._login.checkToken();
    
  }
  ngAfterContentInit() {
    console.log("---------- AFTER CONTENT INIT");
    
  }
  ngOnDestroy() {
    console.log("---------- ON DESTROY");

  }


  
}
