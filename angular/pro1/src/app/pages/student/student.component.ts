import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  newStudent={
    id : null,
    name : "",
    age : null,
    fee : null
  };
  selectedStudent={
    id: null,
    name: "",
    age: null,
    fee: null
  };
  allStudent = [
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
    // console.log(this.newStudent);
    let n = this.allStudent.length;
    this.newStudent.id = n+1;
    this.allStudent.push(this.newStudent);
  }
  askAdd() {
    this.newStudent={
      id : null,
      name : "",
      age : null,
      fee : null
    }
  }
  askDelete(a) {
    console.log("-------", a);
    this.selectedStudent=a;
  }
  delete() {
    let n = this.allStudent.indexOf(this.selectedStudent);
    this.allStudent.splice(n, 1);
  }
}
