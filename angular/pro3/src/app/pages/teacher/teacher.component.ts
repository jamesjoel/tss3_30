import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../services/teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
  teachers:any[];
  constructor(private _teacher : TeacherService) { }

  ngOnInit() {
    this._teacher.getTeacher().subscribe(result=>{
      // console.log(result);
      this.teachers = result;

    });
  }
  add(obj) {
    this._teacher.addTeacher(obj).subscribe(result=>{
      // console.log(result);
      this.teachers.push(result);
    });
  }

}
