import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserModel} from "../../models/user.model";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @Input() parentFormGroup!: FormGroup;
  @Input() userInformation!: UserModel;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.parentFormGroup.addControl('first', this.fb.control('', [Validators.required]));
    this.parentFormGroup.addControl('last', this.fb.control('', [Validators.required]));

    if (this.userInformation) {
      this.prefillForm()
    }
  }

  private prefillForm() {
    const {firstName, lastName} = this.userInformation;
    this.parentFormGroup.patchValue({
      first: firstName,
      last: lastName,
    })
  }

}
