import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormlyWrapperComponent} from './containers/formly-wrapper/formly-wrapper.component';
import {AbstractControl, ReactiveFormsModule, ValidationErrors, Validators} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {FormlyFieldConfig, FormlyModule} from "@ngx-formly/core";
import {FormlyBootstrapModule} from "@ngx-formly/bootstrap";
import {SharedModule} from "../../shared/shared.module";

export function RequiredFieldMessage(err: any, field: FormlyFieldConfig) {
  return `"${field?.formControl?.value}" is not a valid IP Address`;
}

export function RequiredValidator(control: AbstractControl): ValidationErrors {
  return Validators.required(control) as ValidationErrors;
}

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([{
      path: '',
      component: FormlyWrapperComponent,
    }]),
    FormlyModule.forRoot({
      validators: [
        {name: 'required', validation: RequiredValidator},
      ],
      validationMessages: [
        {name: 'required', message: RequiredFieldMessage},
      ],
    }),
    FormlyBootstrapModule,
  ],
  declarations: [
    FormlyWrapperComponent
  ]
})
export class Option4Module {
}
