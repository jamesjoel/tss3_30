import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bonus'
})
export class BonusPipe implements PipeTransform {

  transform(a, b, c) {
    let y;
    if(b=="male"){
      let x = (a*10)/100;
      a = parseInt(a);
      y= x+a;

    }
    else{
      let x = (a * 15) / 100;
      a = parseInt(a);
      y= x+a;
    }

    if(c <= 25){
      y += (y*5)/100;
      
    }
    return y;
  }
}
