import { Component, OnInit } from '@angular/core';
import { MyService } from '../../services/my.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  allData:any;
  constructor(private a : MyService, private b : HttpClient) { }

  ngOnInit() {
    this.b.get("http://localhost:3000/teacher").subscribe(data => {
      this.allData=data;
    });
   

  }
  
}
