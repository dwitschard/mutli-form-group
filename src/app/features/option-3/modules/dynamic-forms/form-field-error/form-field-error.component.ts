import {AbstractControl} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {Component, Input} from '@angular/core';

@Component({
  selector: 'lip-form-field-error',
  templateUrl: './form-field-error.component.html',
  styleUrls: ['./form-field-error.component.scss'],
})
export class FormFieldErrorComponent {
  @Input() field!: AbstractControl;

  private readonly validation_prefix = 'FORMS.VALIDATION.';

  constructor() {}

  public hasErrors() {
    return this.field?.invalid;
  }

  public getFirstErrorMessage(): Observable<string> {
    if (this.hasErrors()) {
      const errorKey = Object.keys(this.field.errors || {})[0];
      switch (errorKey) {
        case 'required':
          return this.getTranslation('REQUIRED');
        case 'usernameAlreadyTaken':
          return this.getTranslation('USERNAME_ALREADY_TAKEN');
        case 'passwordConfirmationMismatch':
          return this.getTranslation('USERNAME_CONFIRMATION_MISMATCH');
        case 'useValueOfProvidedOptions':
          return this.getTranslation('USE_VALUE_OF_PROVIDED_OPTIONS');
        case 'matDatepickerParse':
          return this.getTranslation('INVALID_DATE');
        case 'pattern':
          return this.getTranslation('INVALID_PATTERN');
        case 'minlength':
          return this.getTranslation('MIN_LENGTH');
        case 'maxlength':
          return this.getTranslation('MAX_LENGTH');
        case 'min':
          return this.getTranslation('MIN_VALUE');
        case 'max':
          return this.getTranslation('MAX_VALUE');
        case 'integer':
          return this.getTranslation('INTEGER_REQUIRED');
        case 'apartmentRooms':
          return this.getTranslation('APARTMENT_ROOMS');
        default:
          console.error(`Unknown error key found: ${errorKey}`);
          return this.getTranslation('UNKNOWN');
      }
    }
    return of('');
  }

  private getTranslation(translationKey: string) {
    return of(translationKey);
  }
}
