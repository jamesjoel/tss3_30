import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter} from '@angular/core';
import { Student } from "../../model/student.interface";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Output() x = new EventEmitter;
  newStudent:Student;
  constructor() { }

  ngOnInit() {
  }
  hello(){
    this.x.emit();
  }

}
