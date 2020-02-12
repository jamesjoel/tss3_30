import { Component, OnInit } from '@angular/core';
import { FileuploadService } from '../../services/fileupload.service';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  constructor(private _file: FileuploadService) {
    
    this._file.getImage().subscribe((result) => {
      this.imageObject.splice(0, 1);
      result.forEach((obj)=>{
        let a = {
      
            image: obj.image,
            thumbImage: obj.image,
            alt: 'alt of image',
            title: 'title of image'
      
        };

        this.imageObject.push(a);

        // console.log(this.imageObject);
      })

      console.log("***********",this.imageObject);
      // console.log("------", result);
      // console.log(result[1].image)
      // this.result = result;
      // console.log(this.result[0].image);

    });

   }

  result: any = [];

  imageObject: Array<object> = [
    {
      image: '',
      thumbImage: '',
      alt: '',
      title: ''
  }
      
  ];

  



  // imageObject: Array<object> = [
  //   this.result.forEach((obj) => {
  //     let object = {
  //       image: obj.image,
  //       thumbImage: obj.image,
  //       alt: 'PEN IMAGE',
  //       title: 'title of image'
  //     }

  //   }),
  // ]


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
    // console.log("----",this.imageObject);
    

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
