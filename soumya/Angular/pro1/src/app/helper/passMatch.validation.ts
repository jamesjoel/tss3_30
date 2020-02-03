import { FormGroup } from '@angular/forms';
export function passMatch (pass:any,rePass:any) {
    return function(myForm:FormGroup){
        let x = myForm.controls[pass];
        let y = myForm.controls[rePass];
        if(y.errors && !y.errors.myError){
            return;
        }
        if(x.value == y.value){
            y.setErrors(null);
        }else{
            y.setErrors({myError : true});
        }
    }
}