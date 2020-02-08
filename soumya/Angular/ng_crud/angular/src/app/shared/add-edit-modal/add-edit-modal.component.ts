import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../model/employee.interface';
@Component({
  selector: 'app-add-edit-modal',
  templateUrl: './add-edit-modal.component.html',
  styleUrls: ['./add-edit-modal.component.scss']
})
export class AddEditModalComponent implements OnInit {

  @Input() employee: Employee;
  @Output() addEditEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
    
  }

  add() {
    // console.log(this.employee);
    this.addEditEvent.emit(this.employee);
  }

}
