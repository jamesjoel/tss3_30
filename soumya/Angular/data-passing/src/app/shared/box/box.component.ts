import { Component, OnInit } from '@angular/core';
import { Input ,Output,EventEmitter } from "@angular/core";
@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {
  @Input() cFullName:string;
  @Input() cGoEmail:string;
  @Input() cName:string;
  varChar:any;
  @Output() x = new EventEmitter;
    


  constructor() { }

  ngOnInit() {
  }
  demo1(){
    this.x.emit(this.varChar);
  }

}
