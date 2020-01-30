import { Component, OnInit } from '@angular/core';
import{ Student } from '../../model/student.interface';
import { Teacher } from '../../model/teacher.interface';
import {Input , Output, EventEmitter} from '@angular/core';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
@Input() cSelectedStudent:Student;
@Input() cteacher:Teacher;
@Output() deleteEvent = new EventEmitter;
@Output() delTeacher = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }
  
    
    delete(){
      if(this.cSelectedStudent){
        this.deleteEvent.emit();
      }else{
        this.delTeacher.emit();
      }
    }
  

}
