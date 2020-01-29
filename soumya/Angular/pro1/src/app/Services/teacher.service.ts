import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Teacher } from '../model/teacher.interface';
@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private _http : HttpClient ) { }

  getTeacher(id=""){
    if(id==""){
      return this._http.get<Teacher[]>("http://localhost:3001/api/teacher/");
    }else{
      return this._http.get<Teacher[]>("http://localhost:3001/api/teacher/"+id);
    }
  }

  addTeacher(obj){
    return this._http.post<Teacher>("http://localhost:3001/api/teacher/",obj);
  }

  editTeacher(id,obj){
    return this._http.put<Teacher>("http://localhost:3001/api/teacher/"+id,obj);
  }

  deleteTeacher(id){
    return this._http.delete<string>("http://localhost:3001/api/teacher/"+id);
  }

}
