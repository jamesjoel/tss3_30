import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private _http : HttpClient) { }
  // getTeacher(5)
  // getTeacher()

  getTeacher(id="") {
    if(id=="")
      return this._http.get<any>("http://localhost:3000/api/teacher");
    else
      return this._http.get<any>("http://localhost:3000/api/teacher/"+id);
  }
  addTeacher(obj) {
    return this._http.post<any>("http://localhost:3000/api/teacher", obj);
  }
  editTeacher(id, obj) {
    return this._http.put<any>("http://localhost:3000/api/teacher/"+id, obj);
  }
  deleteTeacher(id) {
    return this._http.delete<any>("http://localhost:3000/api/teacher/"+id);
  }
}
