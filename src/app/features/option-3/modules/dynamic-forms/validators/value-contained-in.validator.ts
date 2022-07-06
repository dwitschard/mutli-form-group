import {AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn} from '@angular/forms';
import {Observable} from 'rxjs';
import {first, map} from 'rxjs/operators';

export function valueContainedInSelection(optionsProvider: () => any[], compareIds: boolean = false): ValidatorFn {
  const validOptionsProvider = optionsProvider;
  return (control: AbstractControl): ValidationErrors | null => {
    const options = compareIds ? validOptionsProvider().map((option) => option.id) : validOptionsProvider();
    if (options.includes(compareIds ? control.value?.id : control.value)) {
      return {};
    }
    return { useValueOfProvidedOptions: true };
  };
}

export function valueContainedInObservable(optionsProvider: () => Observable<any[]>): AsyncValidatorFn {
  const asyncOptionsProvider = optionsProvider;
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return asyncOptionsProvider().pipe(
      first(),
      map((options) => {
        if (options.includes(control.value)) {
          return {};
        }
        return { useValueOfProvidedOptions: true };
      })
    );
  };
}
