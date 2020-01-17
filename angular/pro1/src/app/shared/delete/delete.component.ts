import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Student } from '../../model/student.interface';







@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  @Input() cSelectedStudent:Student;
  constructor() { }

  ngOnInit() {
  }

}
