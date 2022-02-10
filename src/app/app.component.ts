import {Component} from '@angular/core';
import {UserModel} from "./models/user.model";
import {CompanyModel} from "./models/company.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public prefilledUserInformation: UserModel = {
    firstName: 'Entered Firstname',
    lastName: 'Entered Lastname'
  }

  public prefilledCompanyInformation: CompanyModel = {
    companyName: 'Fancy Corp.',
    address: 'Musterstrasse 87'
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
      userInformation: this.fb.group({
        // Option I
        // This Form is added during runtime in `UserFormComponent#ngOnInit`
      }),
      companyInformation: this.fb.group({
        // Option II
        // Define structure (and keys) of form already in ParentComponent.
        // Attention: Child-Component `CompanyFormComponent` needs to be aware of the keys (`name`, `address`!
        name: ['', [Validators.required]],
        address: ['', [Validators.required]],
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
