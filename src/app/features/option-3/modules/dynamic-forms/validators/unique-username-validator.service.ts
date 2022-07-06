import {Injectable} from '@angular/core';
import {AbstractControl, AsyncValidatorFn, ValidationErrors,} from '@angular/forms';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {SignUpService} from '@core/services/api/sign-up.service';

@Injectable({
  providedIn: 'root',
})
export class UniqueUsernameValidatorService {
  constructor(private signupService: SignUpService) {}

  get usernameValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.signupService.usernameAvailable(control.value).pipe(
        map((isAvailable: boolean) => {
          if (!isAvailable) {
            return { usernameAlreadyTaken: true };
          }
          return {};
        })
      );
    };
  }
}
