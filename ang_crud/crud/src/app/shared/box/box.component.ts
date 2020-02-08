import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {

  @Output() goToParent = new EventEmitter();

  @Input() demo = {
    name : ""
  }

  constructor() { }

  ngOnInit() {
  }
  go() {
    this.goToParent.emit(this.demo);
  }
}
