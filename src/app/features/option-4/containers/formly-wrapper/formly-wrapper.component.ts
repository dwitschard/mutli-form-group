import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators} from "@angular/forms";
import {FormlyFieldConfig} from "@ngx-formly/core";
import {EmailForm} from "../../models/email-form.model";

@Component({
  selector: 'app-formly-wrapper',
  templateUrl: './formly-wrapper.component.html'
})
export class FormlyWrapperComponent implements OnInit {

  public form = new FormGroup({});
  public model: EmailForm = {email: 'email@gmail.com'};
  public fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      validators: [Validators.required],
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      }
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(model: EmailForm) {
    console.log(model);
  }

}
