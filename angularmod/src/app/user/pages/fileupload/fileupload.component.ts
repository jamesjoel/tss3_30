import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss']
})
export class FileuploadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  demo(x){
    // console.log(x.files[0]);
    let file = x.files[0];
    let form = new FormData();
    form.append("image", file);
    // call a service
  }

}
