import { Validators, AbstractControl, ValidatorFn } from '@angular/forms';

export function wordsValidation(min: Number): ValidatorFn  {
    return (control: AbstractControl): {} => {
        const words = control.value.trim().split(' ').length;
        return words < min  ? {'minWords': true} : null;
    };

}