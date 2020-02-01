import { FormGroup } from '@angular/forms';
export function NumMatch(a:string) {
    console.log("----",a);
    return function(myForm : FormGroup){
        let x = myForm.controls[a];
       
        if (x.errors && !x.errors.numErr) {
            return;
        }
        
        
        if(isNaN(x.value)==true)
        {
            x.setErrors({ numErr : true});
        }
        else{
            x.setErrors(null);
            
        }
        
        
    }
}