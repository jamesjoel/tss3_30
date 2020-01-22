import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-box1',
  templateUrl: './box1.component.html',
  styleUrls: ['./box1.component.scss']
})
export class Box1Component implements OnInit {

  @Input() cName:string;
  @Input() cFullName:string;
  @Input() cGoEmail:string;
  constructor() { }

  ngOnInit() {
  }

}
