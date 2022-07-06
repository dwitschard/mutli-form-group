import {Component, Input, OnInit} from '@angular/core';
import {Field, FieldType, HtmlInputType} from "../../modules/dynamic-forms/model/dynamic-reactive-form.model";
import {FormGroup, Validators} from "@angular/forms";
import {maxDefaultTextLength, minDefaultTextLength} from "../../modules/dynamic-forms/validators/text-field.validator";

@Component({
  selector: 'app-dynamic-form-wrapper',
  templateUrl: './dynamic-form-wrapper.component.html',
})
export class DynamicFormWrapperComponent implements OnInit {

  @Input() shouldRenderGD: boolean = false;

  public formFields: Field[] = [
    {
      name: 'firstName',
      label: 'Vorname',
      type: FieldType.TEXTFIELD,
      htmlInputType: HtmlInputType.TEXT,
      validation: [Validators.required, minDefaultTextLength, maxDefaultTextLength],
    },
    {
      name: 'lastName',
      label: 'Nachname',
      type: FieldType.TEXTFIELD,
      htmlInputType: HtmlInputType.TEXT,
      validation: [Validators.required, minDefaultTextLength, maxDefaultTextLength],
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  submit(formGroup: FormGroup) {
    if (formGroup.valid) {
      console.log('submitting Form')
      console.log(formGroup.value)
    } else {
      console.log('form invalid')
    }
  }
}
