import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FuncService} from '../../Services/func.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  allData:any;
  constructor(private funcService : FuncService , private method: HttpClient ) {  }

  ngOnInit() {
    this.method.get("http://192.168.2.13:3000/Student").subscribe(data => {
      this.allData = data;
    });
  }

}
