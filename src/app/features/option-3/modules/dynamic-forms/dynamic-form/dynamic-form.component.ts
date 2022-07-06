import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Field, KeyValuePair} from "../model/dynamic-reactive-form.model";
import {FormService} from "../services/form.service";

@Component({
  selector: 'lip-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit, OnChanges {
  @Input() fieldset!: Field[];
  @Input() errors: KeyValuePair[] = [];
  @Input() prefillData: KeyValuePair[] = [];
  @Input() readOnly: boolean | null = false;
  @Input() formFieldClass: string = '';
  @Input() focusFirstFormField: boolean = false;

  @Output() onSubmit: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  public form!: FormGroup;
  public formReady = false;

  private togglesWithChildren: {
    name: string;
    value: boolean;
    children: Field[];
  }[] = [];

  constructor(private formBuilder: FormBuilder, private formService: FormService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.formReady && changes['readOnly']) {
      this.formService.changeFormState(changes['readOnly'].currentValue, this.form);
    }
  }

  ngOnInit(): void {
    if (this.fieldset) {
      this.initializeForm();
    } else {
      console.warn('fieldset is required for dynamic form component.');
    }
  }

  initializeForm(): void {
    this.form = this.formBuilder.group({});

    this.fieldset.forEach((field: Field) => {
      this.form.addControl(field.name, this.initializeFormControl(field));

      if (field.children) {
        field.children.forEach((child: Field) => {
          this.form.addControl(child.name, this.initializeFormControl(child));
        });
        this.togglesWithChildren.push({
          name: field.name,
          value: field.defaultValue,
          children: field.children,
        });
      }
    });

    this.handleSlideToggleChildren();

    this.formReady = true;
  }

  initializeFormControl(field: Field): FormControl {
    let value;

    if (typeof field.defaultValue !== 'undefined') {
      value = field.defaultValue;
    }

    if (field.type === 5) {
      if (typeof value === 'undefined') {
        value = true;
      }

      if (field.defaultValue === false) {
        this.hideChildren(this.fieldset.indexOf(field));
      }
    }

    if (this.prefillData) {
      const defaultValue = this.prefillData.filter((element: KeyValuePair, _: number) => element.key === field.name);
      if (defaultValue.length) {
        value = defaultValue[0].value;
      }
    }

    const validation = field.validation ? field.validation : [];
    const asyncValidators = field.asyncValidation ? field.asyncValidation : [];
    const isDisabled = field.disabled || this.readOnly;

    return this.formBuilder.control({ value, disabled: isDisabled }, validation, asyncValidators);
  }

  submitForm() {
    this.onSubmit.emit(this.form);
  }

  handleSlideToggleChildren(): void {
    this.togglesWithChildren.forEach((parent) => {
      this.form.controls[parent.name].valueChanges.subscribe((value) => {
        this.toggleChildren(parent.name, value);
      });
    });
  }

  toggleChildren(name: string, toggleValue: boolean): void {
    const parentIndex: number = this.fieldset.findIndex((field: Field) => field.name === name);
    if (toggleValue) {
      this.showChildren(parentIndex);
    } else {
      this.hideChildren(parentIndex);
    }
  }

  private hideChildren(parentIndex: number): void {
    const parent: Field = { ...this.fieldset[parentIndex] };
    parent?.children?.forEach((child, index) => {
      this.form.get(child.name)?.disable();
      if (parent && parent.children && (parent.children.length || 0) >= index) {
        parent.children[index].visible = false;
      }
    });
  }

  private showChildren(parentIndex: number): void {
    const parent = { ...this.fieldset[parentIndex] };
    parent?.children?.forEach((child, index) => {
      this.form.get(child.name)?.enable();
      if (parent && parent.children && (parent.children.length || 0) >= index) {
        parent.children[index].visible = true;
      }
    });
  }
}
