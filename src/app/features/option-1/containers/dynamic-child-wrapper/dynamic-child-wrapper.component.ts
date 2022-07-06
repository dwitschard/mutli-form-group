import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserModel} from "../../models/user.model";

@Component({
  selector: 'app-dynamic-child-wrapper',
  templateUrl: './dynamic-child-wrapper.component.html',
})
export class DynamicChildWrapperComponent implements OnInit {

  public form: FormGroup;

  public prefilledUserInformation: UserModel = {
    firstName: 'Entered Firstname',
    lastName: 'Entered Lastname'
  }

  constructor(private fb: FormBuilder) {
    this.form = this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm(): FormGroup {
    return this.fb.group({
      userInformation: this.fb.group({
        // Option I
        // This Form is added during runtime in `UserFormComponent#ngOnInit`
      }),
    })
  }

  getChildFormGroup(name: string): FormGroup {
    return this.form.controls[name] as FormGroup;
  }

  submitForm() {
    if (this.form.valid) {
      console.log('submitting Form')
      console.log(this.form.value)
    } else {
      console.log('form invalid')
    }
  }

}
