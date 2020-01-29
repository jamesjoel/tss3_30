import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../services/teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
  teachers:any[];
  teacher:any;
  constructor(private _teacher : TeacherService) { }

  ngOnInit() {
    this._teacher.getTeacher().subscribe(result=>{
      // console.log(result);
      this.teachers = result;

    });

  }

  askDelete(obj){
    this.teacher = obj;
  }
  delete(){
    this._teacher.deleteTeacher(this.teacher._id).subscribe(result=>{
      // console.log(result);
      let n = this.teachers.indexOf(this.teacher);
      this.teachers.splice(n, 1);
    });
  }





















  
  add(obj) {
    this._teacher.addTeacher(obj).subscribe(result=>{
      // console.log(result);
      this.teachers.push(result);
    });
  }

}
