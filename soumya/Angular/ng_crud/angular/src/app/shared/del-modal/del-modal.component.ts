import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Employee } from '../../model/employee.interface';
@Component({
  selector: 'app-del-modal',
  templateUrl: './del-modal.component.html',
  styleUrls: ['./del-modal.component.scss']
})
export class DelModalComponent implements OnInit {

  @Input() deleteEmp: Employee;
  @Output() delEvent = new EventEmitter;
  constructor() { }

  ngOnInit() {

  }

  delete() {
    this.delEvent.emit();
  }
}
