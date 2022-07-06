import {AbstractControl} from '@angular/forms';

export function passwordConfirmValidator(control: AbstractControl) {
  if (control.parent) {
    const passwordConfirm = control.value;
    const { password } = control.parent.value;

    // avoid displaying the message error when values are empty
    if (!passwordConfirm || !password) {
      return null;
    }

    if (passwordConfirm === password) {
      return null;
    }

    return { passwordConfirmationMismatch: true };
  }
  return null;
}
