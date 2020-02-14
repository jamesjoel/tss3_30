import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHello]'
})
export class HelloDirective {

  constructor(private _ele : ElementRef) { 
    //  <h2></h2>
    _ele.nativeElement.style.backgroundColor = "red";
    _ele.nativeElement.style.fontSize = "15px";
  }
  @HostListener('mouseover') demo1(){
    // console.log("hello");
    this._ele.nativeElement.style.backgroundColor = 'green';
  };
  @HostListener('click') demo2(){
    // this._ele.nativeElement.style.backgroundColor = 'green';
    // console.log(this._ele.nativeElement.innerHTML);
    this._ele.nativeElement.innerHTML="ujjian";

  }

}
