import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url = "http://localhost:3000/api/employee";
  constructor(private _http : HttpClient) { }

  getEmployee() {
    return this._http.get<any>(this.url);
  }
  addEmployee(obj:Employee){
    return this._http.post<any>(this.url, obj);
  }

  editEmployee(obj: Employee, id : string) {
    return this._http.put<any>(this.url+"/"+id, obj);
  }

  deleteEmployee(id:string) {
    return this._http.delete<any>(this.url+"/"+id);
  }


}
