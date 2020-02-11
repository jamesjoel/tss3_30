import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demo'
})
export class DemoPipe implements PipeTransform {

  // transform(arr, check){
  //   if(check==true){
  //     arr.forEach(function(x){
  //       x.newname="hello";
  //     });
  //     return arr;
  //   }else{
  //     if(arr){
  //       arr.forEach(function (x) {
  //         x.newname = x.name;
  //       });
  //       return arr;
  //     }
  //   }
  // }
  transform(arr, col, type){
    if(type==true){
      type = 'asc';
    }
    else{
      type ='desc';
    }
    if(arr){

      arr.sort(this.compareValues(col, type));
      return arr;
    }
    return [];
  }



 compareValues(key, order = 'asc') {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }

    const varA = (typeof a[key] === 'string')
      ? a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string')
      ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order === 'desc') ? (comparison * -1) : comparison
    );
  };
}





}
