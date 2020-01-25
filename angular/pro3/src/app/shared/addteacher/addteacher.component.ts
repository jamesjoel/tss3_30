import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-addteacher',
  templateUrl: './addteacher.component.html',
  styleUrls: ['./addteacher.component.scss']
})
export class AddteacherComponent implements OnInit {
  
  @Output() teacherEvent = new EventEmitter();

  teacher={
    name : "",
    age : null,
    city : ""
  }
  constructor() { }

  ngOnInit() {
  }

  add() {
    this.teacherEvent.emit(this.teacher);
  }
}
