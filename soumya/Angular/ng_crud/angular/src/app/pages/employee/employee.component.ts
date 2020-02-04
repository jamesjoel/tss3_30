import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee.interface';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employees: Employee[];
  employee: Employee = {
    name: "",
    age: null,
    city: ""
  }
  index: number;
  constructor(private _emp: EmployeeService) { }

  ngOnInit() {
    this._emp.getEmployee().subscribe((result) => {
      this.employees = result;
    });
  }

  askAdd() {
    this.employee = {
      name: "",
      age: null,
      city: ""
    }
  }
    addEdit(obj: Employee) {
      if (obj._id) {
        this._emp.editEmployee(obj, obj._id).subscribe((result) => {
          this.employees[this.index] = this.employee;
        });
      } else {
        this._emp.addEmployee(obj).subscribe((result) => {
          // console.log(result);
          this.employees.push(result);
        });

      }
    }


    askEdit(obj: Employee, n: number) {
      this.employee = { ...obj };
      this.index = n;
    }



    askDelete(obj: Employee, n: number) {
      this.employee = obj;
      this.index = n;
    }

    delete () {
      this._emp.deleteEmployee(this.employee._id).subscribe((result) => {
        this.employees.splice(this.index, 1);
      });
    }

  }
