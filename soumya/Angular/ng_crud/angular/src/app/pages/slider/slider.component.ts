import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  imageObject: Array<object> = [
    {
      image : './assets/heroImage.jpeg',
      thumbImage : './assets/heroImage.jpeg',
      alt : 'PEN IMAGE',
      title : 'title of image'
    },
    {
      image : './assets/images.jpeg',
      thumbImage : './assets/images.jpeg',
      alt : 'PEN IMAGE',
      title : 'title of image'
    },
    {
      image : './assets/iphone8_iphone8plus_product_red_front_back_041018-e1523280198726.jpg',
      thumbImage : './assets/iphone8_iphone8plus_product_red_front_back_041018-e1523280198726.jpg',
      alt : 'PEN IMAGE',
      title : 'title of image'
    },
    {
      image : './assets/marguerite-729510__340.webp',
      thumbImage : './assets/marguerite-729510__340.webp',
      alt : 'PEN IMAGE',
      title : 'title of image'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
