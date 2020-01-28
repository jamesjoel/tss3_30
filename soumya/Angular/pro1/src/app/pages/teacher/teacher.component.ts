import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../Services/teacher.service';
import { Teacher } from '../../model/teacher.interface';
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})

export class TeacherComponent implements OnInit {
teachers:any[];
teacher:Teacher={
      _id:null,
      name:"",
      age:null,
      city: ""
};
index:number;
  constructor(private _teacher : TeacherService) { }

  ngOnInit() {
    this._teacher.getTeacher().subscribe(result=>{
      // console.log(result);
      this.teachers = result;
    });
  }
  addTeacher(){
    // console.log(this.teacher);
    if(this.teacher._id){
      console.log(this.teacher);

      this._teacher.editTeacher(this.teacher._id,this.teacher).subscribe(result=>{
        this.teachers[this.index]=this.teacher;
        // console.log(result);
      });
    }else{
      this._teacher.addTeacher(this.teacher).subscribe(result =>{
        this.teachers.push(result);
        // console.log(result);
      }); 
    }
  }
  askDel(obj){
   this.teacher = obj;
  }
  delete(){
    this._teacher.deleteTeacher(this.teacher._id).subscribe(result=>{
      let n = this.teachers.indexOf(this.teacher);
      this.teachers.splice(n,1);
    })
  }
  askAdd(){
    this.teacher={
      _id:null,
      name:"",
      age:null,
      city: ""
    }
  }
  askEdit(obj,n){
    this.teacher=obj;
    this.index = n; 
  }
  
}
