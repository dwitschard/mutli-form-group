import {AbstractControl, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';

export function isInteger(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value && control.value != parseInt(control.value, 10)) {
      return { integer: true };
    }
    return {};
  };
}

export const maxSystemNumberValidator = Validators.max(999999999.99);

export const maxIntNumberValidator = Validators.max(2147483647);

export const belowTenMio = Validators.max(9999999.99);
