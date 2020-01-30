import { Component, OnInit } from '@angular/core';
import {Input,Output , EventEmitter} from '@angular/core';
import {Teacher} from '../../model/teacher.interface';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
 @Input() cteacher:Teacher;
 @Output() teacherEvent = new EventEmitter;
//  @Output() editTeacherEvent = new EventEmitter;

constructor() { }

ngOnInit() {
  // console.log("soumya-----xyz"+this.cteacher);
  }
  add() {
      this.teacherEvent.emit();
  }

}
