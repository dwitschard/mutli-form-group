import {Component} from '@angular/core';
import {UserModel} from "./models/user.model";
import {CompanyModel} from "./models/company.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'multi-form-group';

  public prefilledUserInformation: UserModel = {
    firstName: 'Entered Firstname',
    lastName: 'Entered Lastname'
  }

  public prefilledCompanyInformation: CompanyModel = {
    companyName: 'Fancy Corp.'
  }

  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.buildForm();
  }

  getChildFormGroup(name: string): FormGroup {
    return this.form.controls[name] as FormGroup;
  }

  private buildForm(): FormGroup {
    return this.fb.group({
      userInformation: this.fb.group({}),
      companyInformation: this.fb.group({
        name: ['', [Validators.required]],
      }),
    })
  }

  submitAllForms() {
    if (this.form.valid) {
      console.log('Perform API Call to persist form')
      console.log(this.form.value)
    } else {
      console.log('at least one of the form is invalid')
      console.log(this.form.value)
    }
  }
}
