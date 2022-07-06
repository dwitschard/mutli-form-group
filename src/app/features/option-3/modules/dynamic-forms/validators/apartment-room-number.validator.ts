import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function apartmentRoomValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value && parseFloat(control.value) % 0.5 != 0) {
      return { apartmentRooms: true };
    }
    return {};
  };
}
