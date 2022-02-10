import {Component, Input, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, AfterViewInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CompanyModel} from "../../models/company.model";

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit {

  @Input() companyInformation!: CompanyModel;
  @Input() companyForm!: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    if (this.companyInformation) {
      this.prefillForm()
    }
  }

  private prefillForm() {
    const {companyName} = this.companyInformation;
    this.companyForm.patchValue({
      name: companyName,
    })
  }

}
