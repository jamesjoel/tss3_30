import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.interface';
import { EmployeeService } from '../../services/employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employees : Employee[];
  employee : Employee={
    name : "",
    age : null,
    city : ""
  };
  index:number;
  constructor(private _emp : EmployeeService) { }

  ngOnInit() {
    this._emp.getEmployee().subscribe(result=>{
      this.employees = result;
    })
  }

  addEdit(obj : Employee) {

    if(obj._id){
      this._emp.editEmployee(obj, obj._id).subscribe(result=>{
        this.employees[this.index]=this.employee;

      });
    }
    else{
      this._emp.addEmployee(obj).subscribe(result => {
        this.employees.push(result);
      });
    }

    
  }
  askDelete(obj:Employee) {
    this.employee = obj;
  }
  delete() {
    this._emp.deleteEmployee(this.employee._id).subscribe(result=>{
      let n = this.employees.indexOf(this.employee);
      this.employees.splice(n, 1);
    });
  }
  

  askEdit(obj:Employee) {
    // this.employee = obj;
    this.index = this.employees.indexOf(obj);
    this.employee = {... obj};
  }
  askAdd() {
    this.employee = {
      name : "",
      age : null,
      city : ""
    }
  }

}
