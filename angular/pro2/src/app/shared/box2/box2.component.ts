import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-box2',
  templateUrl: './box2.component.html',
  styleUrls: ['./box2.component.scss']
})
export class Box2Component implements OnInit {
  name:srting;

  @Output() x = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  demo() {
    // console.log(this.name);
    this.x.emit(this.name);
  }

}
