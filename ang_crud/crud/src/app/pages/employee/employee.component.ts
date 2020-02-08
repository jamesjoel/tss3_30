import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.interface';
import { EmployeeService } from '../../services/employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  x=false;
  employees : Employee[];
  employee : Employee={
    name : "",
    age : null,
    city : "",
    salary : null,
    gender : ""
  };
  index:number;

  columnName='name';
  defaultOrder = true;

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
<<<<<<< HEAD
      this._emp.addEmployee(obj).subscribe(result=> {
        // console.log(result);
        this.employees[this.index]=this.employee;
=======
      this._emp.addEmployee(obj).subscribe(result => {
        this.employees.push(result);
>>>>>>> dea440bcdc5686f94732af74c90434adca29b597
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
      city : "",
      salary : null,
      gender : ""
    }
  }

  sort(col, check){
    this.columnName = col;
    this.defaultOrder = !this.defaultOrder;
  }

  

}
