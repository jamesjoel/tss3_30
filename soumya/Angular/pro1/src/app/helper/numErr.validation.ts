import { FormGroup } from '@angular/forms';
export function numValid(numValue: string) {
    return function (myForm: FormGroup) {
        let numberValue = myForm.controls[numValue];

        if (numberValue.errors && !numberValue.errors.numErr) {
            return;
        }

        if (isNaN(numberValue.value) == true) {
            numberValue.setErrors({ numErr: true });
        } else {
            numberValue.setErrors(null);
        }
    }
}  