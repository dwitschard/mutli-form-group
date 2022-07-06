import {Injectable} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor() {}

  public enableForm(form: FormGroup) {
    this.changeFormState(false, form);
  }

  public disableForm(form: FormGroup) {
    this.changeFormState(true, form);
  }

  public changeFormState(setToDisabled: boolean, form: FormGroup) {
    for (let controlKey in form.controls) {
      const control = form.controls[controlKey];
      setToDisabled ? control.disable() : control.enable();
    }
  }

  public changeControlState(setToDisabled: boolean, controls: FormControl[]) {
    controls.forEach((control) => (setToDisabled ? control.disable() : control.enable()));
  }
}
