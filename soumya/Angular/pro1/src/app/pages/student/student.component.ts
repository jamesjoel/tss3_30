import { Component, OnInit } from '@angular/core';
import { Student  } from "../../model/student.interface";
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  index:number;
  newStudent:Student={
    id : null,
    name : "",
    age : null,
    fee : null
  };
  selectedStudent:Student;
  allStudent:Student[] = [
    {
      id : 1,
      name : "rohit",
      age : 25,
      fee : 5000  
    },
    {
      id: 2,
      name: "jaya",
      age: 20,
      fee: 6000
    },
    {
      id: 3,
      name: "gaurav",
      age: 23,
      fee: 7500
    },
  ]

  constructor() { }

  ngOnInit() {
  }

  clearData() {
    this.newStudent={
      id : null,
      name : "",
      age : null,
      fee : null
    };
  }

  add() {
    if(this.newStudent.id){
      this.allStudent[this.index]=this.newStudent;

    }else{

      let a = this.allStudent.length;
       this.newStudent.id = a+1;
      this.allStudent.push(this.newStudent);
    }
  }
askDelete(a:Student){
  this.selectedStudent=a;
}

delete(){
  let n = this.allStudent.indexOf(this.selectedStudent);
  this.allStudent.splice(n,1);
}

 askEdit(a:Student,n:number){
   this.newStudent = {... a};
   this.index = n;
 }


}
