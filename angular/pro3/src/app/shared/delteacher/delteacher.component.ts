import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delteacher',
  templateUrl: './delteacher.component.html',
  styleUrls: ['./delteacher.component.scss']
})
export class DelteacherComponent implements OnInit {
  @Input() cTeacher:any;
  @Output() teacherEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  delete(){
    this.teacherEvent.emit();
    // child fun to parent fun - delete() see parent compo...
  }

}
