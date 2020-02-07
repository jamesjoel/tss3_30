import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalSalary'
})
export class TotalSalaryPipe implements PipeTransform {

  transform(emp_salary,emp_gender,emp_age){
    let y:number;
    if(emp_gender == "male"){
      let x = (emp_salary*10)/100;
      emp_salary = parseInt(emp_salary);
       y = x+emp_salary;
    }else{
      let x = (emp_salary*15)/100;
      emp_salary = parseInt(emp_salary);
       y = x+emp_salary;

    }
    if(emp_age <=25){
      y += (emp_salary*5)/100;
    }
    return y;
  }

}
