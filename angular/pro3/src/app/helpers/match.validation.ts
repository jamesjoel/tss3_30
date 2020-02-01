import { FormGroup } from '@angular/forms';
export function Match(pass, repass) {
    return function(myForm : FormGroup){
        // console.log(myForm.controls['password']);
        let x = myForm.controls[pass];
        let y = myForm.controls[repass];
        // console.log(y);
        if(y.errors && !y.errors.myError){
            return;
        }



        if(x.value != y.value){
            //console.log("sdfg sdfg sdgsdfg");
            y.setErrors({ myError : true });
        }
        else{
            y.setErrors(null);
        }
        // return;

    }
}