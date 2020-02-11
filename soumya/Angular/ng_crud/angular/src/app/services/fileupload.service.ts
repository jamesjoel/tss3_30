import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileuploadService {
  api_url = environment.api_url;

  constructor(private _http: HttpClient) { }

  doUpload(obj : any) {
    // console.log(obj);
   return this._http.post<any>(this.api_url+'fileupload',obj);
  }
  getImage(){
    return this._http.get<any>(this.api_url+'getimage');
  }
}
