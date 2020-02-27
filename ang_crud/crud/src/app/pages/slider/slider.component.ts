import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  speed:number = .5;
  size = {
    height : 300,
    width : 400
  }
  hobby=[];
  /*
  public toggles = [
    { value: 'toggled', display: 'Toggled' },
    { value: 'untoggled', display: 'UnToggled' },
];

  */

  imageObject = [
    {
    image: './assets/1.jpg',
      thumbImage: './assets/1.jpg',
    alt: 'alt of image',
    title: 'title of image'
    },
    {
      image: './assets/2.jpg',
      thumbImage: './assets/2.jpg',
      alt: 'alt of image',
      title: 'title of image'
    },
    {
      image: './assets/4.jpg',
      thumbImage: './assets/4.jpg',
      alt: 'alt of image',
      title: 'title of image'
    },
    {
      image: './assets/5.jpg',
      thumbImage: './assets/5.jpg',
      alt: 'alt of image',
      title: 'title of image'
    } 
    
  ];

  constructor() { }

  ngOnInit() {
  }

  demo(value, event){
    
    if(event.target.checked){
      this.hobby.push(value);
    }
    else{
      let n = this.hobby.indexOf(value);
      this.hobby.splice(n, 1);
    }
  }

}
