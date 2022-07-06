import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {DynamicFormComponent} from "./dynamic-form/dynamic-form.component";
import {DynamicFieldComponent} from "./dynamic-field/dynamic-field.component";
import {FormFieldErrorComponent} from "./form-field-error/form-field-error.component";

@NgModule({
  declarations: [DynamicFormComponent, DynamicFieldComponent, FormFieldErrorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
  ],
  exports: [DynamicFormComponent, FormFieldErrorComponent, DynamicFieldComponent],
})
export class DynamicFormsModule {}
