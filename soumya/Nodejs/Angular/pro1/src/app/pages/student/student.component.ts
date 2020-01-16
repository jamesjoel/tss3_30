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

  clearData() {
    this.newStudent={
      id : null,
      name : "",
      age : null,
      fee : null
    };
  }

  add() {
    let a = this.allStudent.length;
     this.newStudent.id = a+1;
    this.allStudent.push(this.newStudent);
  }

  // confirmMsg(){
  //   // confirm("Are You Sure Delete This User");
  //   // alert("Are You Sure Del44ete This User");
  // }

}
