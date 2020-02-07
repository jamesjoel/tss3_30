import { Component, OnInit } from '@angular/core';
import { UploadService } from '../../services/upload.service';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss']
})
export class FileuploadComponent implements OnInit {
  imgArr:any=[];

  constructor(private _upload : UploadService) { }

  ngOnInit() {
  }

  upload(a){
   
    let file = a.files[0];
    let form = new FormData();
    form.append("image", file);
    this._upload.doUpload(form).subscribe(result=>{
        this.imgArr.push(result.path);
    });
  }
}
