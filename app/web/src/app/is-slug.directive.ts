import { Validators, AbstractControl, ValidatorFn } from '@angular/forms';
const S = require('string');

export function isSlugValidation(): ValidatorFn  {
    return (control: AbstractControl): {} => {
        const slug = control.value;
        const sluglized = S(slug).slugify().s;
        const isDifferent = sluglized !== slug;
        return isDifferent ? {'isNotSlug': isDifferent} : null;
    };

}