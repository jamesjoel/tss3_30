import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Employee } from '../model/employee.interface';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  api_url = environment.api_url;
  // url = "http://localhost:3000/api/employee";
  constructor(private _http: HttpClient, private _login: LoginService) { }

  getEmployee() {
    return this._http.get<any>(this.api_url + 'employee', {
      headers: { Authorization: this._login.getToken() }
    });
  }

  addEmployee(obj: Employee) {
    return this._http.post<any>(this.api_url + 'employee', obj, {
      headers: { Authorization: this._login.getToken() }
    });
  }

  editEmployee(obj: Employee, id: string) {
    return this._http.put<any>(this.api_url + 'employee' + '/' + id, obj, {
      headers: { Authorization: this._login.getToken() }
    });
  }

  deleteEmployee(id: string) {
    return this._http.delete<any>(this.api_url + 'employee' + '/' + id, {
      headers: { Authorization: this._login.getToken() }
    });
  }
}
