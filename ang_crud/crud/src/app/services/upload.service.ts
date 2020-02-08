import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private _http : HttpClient) { }

  doUpload(obj:any) {
    return this._http.post<any>("http://localhost:3000/api/fileupload", obj);
  }

}
