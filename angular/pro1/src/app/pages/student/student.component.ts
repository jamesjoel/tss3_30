import { Component, OnInit } from '@angular/core';
import { Student } from '../../model/student.interface';



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  index:number;
  newStudent : Student = {
    id : null,
    name : "",
    age : null,
    fee : null
  };
  selectedStudent:Student;

  allStudent : Student[] = [
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

  add() {
    if(this.newStudent.id){ // when we have id in new student then update data
      this.allStudent[this.index]=this.newStudent;
    }
    else{
      // when we dont have id than add data
      let n = this.allStudent.length;
      this.newStudent.id = n+1;
      this.allStudent.push(this.newStudent);
      
    }
  }
  askAdd() {
    this.newStudent={
      id : null,
      name : "",
      age : null,
      fee : null
    }
  }
  askDelete(a:Student) {
    console.log("-------", a);
    this.selectedStudent=a;
  }
  askEdit(a : Student, n : number) {
    this.newStudent = {... a};
    this.index = n;
  }



  delete() {
    let n = this.allStudent.indexOf(this.selectedStudent);
    this.allStudent.splice(n, 1);
  }
}
