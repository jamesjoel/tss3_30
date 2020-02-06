import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bonus'
})
export class BonusPipe implements PipeTransform {
  transform(emp_gender: any, emp_age: any) {
    let a = 10;
    let b = 15;
    if (emp_gender == "male") {
      if (emp_age <= 25) {
        return a+5+'%';
      }
      return a+'%';
    } else {
      if (emp_age <= 25) {

        return b+5+'%';
      }
      return b+'%';
    }
  }

}
