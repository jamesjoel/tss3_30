import { Output, EventEmitter, Component, OnInit, Input } from '@angular/core';
import { Employee } from '../../models/employee.interface';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})




export class AddEditComponent implements OnInit {
 @Input() employee:Employee;
  @Output() addEditEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  add() {
    this.addEditEvent.emit(this.employee);
  }

}
