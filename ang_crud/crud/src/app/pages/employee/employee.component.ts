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
<<<<<<< HEAD

  constructor(private _emp : EmployeeService) { }
=======

  columnName='name';
  defaultOrder = true;

  constructor(private _emp : EmployeeService) { }



>>>>>>> 9e8acdf22476c638507ea57555087763eacecfc0
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

      this._emp.addEmployee(obj).subscribe(result=> {
        // console.log(result);
        this.employees[this.index]=this.employee;

      this._emp.addEmployee(obj).subscribe(result => {
        this.employees.push(result);
 
      });
<<<<<<< HEAD
    });
  }
=======
    }
    
>>>>>>> 312d91e32ad239f5873a3f463e07c3908fcd742c
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
