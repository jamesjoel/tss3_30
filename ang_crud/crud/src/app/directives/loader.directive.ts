import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[loader]'
})
export class LoaderDirective {

  constructor(private _ele : ElementRef) { }

  @HostListener('click') demo(){
    this._ele.nativeElement.innerHTML+=" <span class='spinner-border spinner-border-sm text-light'></span>";
  }

}
