import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {CompanyModel} from "../../models/company.model";

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit {

  @Input() companyInformation!: CompanyModel;
  @Input() companyForm!: FormGroup;
  @Input() shouldDisplaySubmitButton: boolean = true;

  @Output() formSubmitted: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
    if (this.companyInformation) {
      this.prefillForm()
    }
  }

  private prefillForm() {
    const {companyName, address} = this.companyInformation;
    this.companyForm.patchValue({
      name: companyName,
      address: address,
    })
  }

  submitCompanyForm() {
    this.formSubmitted.emit();
  }
}
