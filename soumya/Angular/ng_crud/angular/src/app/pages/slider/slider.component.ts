import { Component, OnInit } from '@angular/core';
import { FileuploadService } from '../../services/fileupload.service';
import { parse } from 'querystring';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  constructor(private _file: FileuploadService) { }

  result: any = [];

  // imageObject: Array<object> = [];

  imageObject: Array<object> = [
    this.result.forEach((obj) => {
      let object = {
        image: obj.image,
        thumbImage: obj.image,
        alt: 'PEN IMAGE',
        title: 'title of image'
      }

    }),
  ]


demo(){
  this.result.forEach((obj) => {
    console.log("rrrrrrrrrrrrr",obj.image);
    // let object = {
    //   image: obj.image,
    //   thumbImage: obj.image,
    //   alt: 'PEN IMAGE',
    //   title: 'title of image'
    // }

  });
}


  ngOnInit() {

    this._file.getImage().subscribe((result) => {
      // console.log(result[1].image)
      this.result = result;
      // console.log(this.result[0].image);

    });

    // this.result.forEach((obj) => {
    //   let object =  {
    //       image: obj.image,
    //       thumbImage: obj.image,
    //       alt: 'PEN IMAGE',
    //       title: 'title of image'
    //     }// ,
    //     this.imageObject.push(object);
    //   })     


    // this.result.forEach((obj) => {
    //   console.log(obj.image);
    //   this.imageObject = [
    //     {
    //       image: obj.image,
    //       thumbImage: obj.image,
    //       alt: 'PEN IMAGE',
    //       title: 'title of image'
    //     }
    //   ]
    // });

  }

}
