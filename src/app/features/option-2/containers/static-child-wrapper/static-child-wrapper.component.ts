import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CompanyModel} from "../../models/company.model";

@Component({
  selector: 'app-static-child-wrapper',
  templateUrl: './static-child-wrapper.component.html',
})
export class StaticChildWrapperComponent implements OnInit {

  public form: FormGroup;

  public prefilledCompanyInformation: CompanyModel = {
    companyName: 'Fancy Corp.',
    address: 'Musterstrasse 87'
  }

  constructor(private fb: FormBuilder) {
    this.form = this.buildForm();
  }

  ngOnInit(): void {
  }

  getChildFormGroup(name: string): FormGroup {
    return this.form.controls[name] as FormGroup;
  }

  private buildForm(): FormGroup {
    return this.fb.group({
      companyInformation: this.fb.group({
        // Option II
        // Define structure (and keys) of form already in ParentComponent.
        // Attention: Child-Component `CompanyFormComponent` needs to be aware of the keys (`name`, `address`!
        name: ['', [Validators.required]],
        address: ['', [Validators.required]],
      }),
    })
  }

  submitForm() {
    if (this.form.valid) {
      console.log('submitting Form')
      console.log(this.form.value)
      this.form.value.name;
    } else {
      console.log('form invalid')
    }
  }
}
