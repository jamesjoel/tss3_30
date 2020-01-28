import { Component, OnInit } from '@angular/core';
import { Input,Output, EventEmitter} from '@angular/core';
import { Student } from "../../model/student.interface";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() cnewStudent:Student
  @Output() x = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }
  hello(){
    this.x.emit();
  }

}
