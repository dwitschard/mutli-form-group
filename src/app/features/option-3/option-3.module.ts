import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {DynamicFormWrapperComponent} from './containers/dynamic-form-wrapper/dynamic-form-wrapper.component';
import {DynamicFormsModule} from "./modules/dynamic-forms/dynamic-forms.module";
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions} from "@angular/material/form-field";
import {SharedModule} from "../../shared/shared.module";

const appearance: MatFormFieldDefaultOptions = {
  appearance: 'outline',
  floatLabel: 'always',
  hideRequiredMarker: false,
};

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{
      path: '',
      component: DynamicFormWrapperComponent,
    }]),
    DynamicFormsModule,
  ],
  declarations: [
    DynamicFormWrapperComponent
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: appearance,
    },
  ]
})
export class Option3Module {
}
