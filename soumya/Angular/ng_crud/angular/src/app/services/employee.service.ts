import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Employee } from '../model/employee.interface';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  api_url = environment.api_url;
// url = "http://localhost:3000/api/employee";
  constructor(private _http : HttpClient) { }

  getEmployee(){
    return this._http.get<any>(this.api_url+'employee');
  }

  addEmployee(obj:Employee){
    return this._http.post<any>(this.api_url+'employee',obj);
  }

  editEmployee(obj: Employee, id : string){
    return this._http.put<any>(this.api_url+'employee'+'/'+id,obj);
  }

  deleteEmployee(id : string){
    return this._http.delete<any>(this.api_url+'employee'+'/'+id);
  }
}
