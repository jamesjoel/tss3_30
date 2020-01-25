import { Component, OnInit } from '@angular/core';
import{ Student } from '../../model/student.interface';
import {Input , Output, EventEmitter} from '@angular/core';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
@Input() cSelectedStudent:Student;
@Output() deleteEvent = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }
  delete(){
    this.deleteEvent.emit();
  }

}
