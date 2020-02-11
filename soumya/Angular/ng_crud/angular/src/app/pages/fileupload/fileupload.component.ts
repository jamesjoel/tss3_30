import { Component, OnInit } from '@angular/core';
import { FileuploadService } from '../../services/fileupload.service';
@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss']
})
export class FileuploadComponent implements OnInit {
  errMsg: string;
  imgArr: any = [];
  constructor(private _file: FileuploadService) { }

  ngOnInit() {
    this._file.getImage().subscribe(result => {
      console.log(result);
      this.imgArr = result;
      // console.log(this.imgArr);
    });
  }

  upload(a) {
    let file = a.files[0];
    let form = new FormData();
    form.append("image", file);

    this._file.doUpload(form).subscribe(result => {
      console.log(result);
      this.imgArr.push(result);
    }, err => {
      if (err.error.msg == "extErr") {
        this.errMsg = "This Extension is Not Allow!";
      } else if (err.error.msg == "sizeErr") {
        this.errMsg = "Size is Too Large";
      }
    });
  }
}
