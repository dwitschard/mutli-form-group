import {AfterViewInit, Component, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroupDirective} from '@angular/forms';
import {MatInput} from '@angular/material/input';
import {Field, FieldType} from "../model/dynamic-reactive-form.model";

@Component({
  selector: 'lip-dynamic-field',
  templateUrl: './dynamic-field.component.html',
  styleUrls: ['./dynamic-field.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DynamicFieldComponent implements OnInit, AfterViewInit {
  @Input() field!: Field;
  @Input() formFieldClass: string = '';
  @Input() shouldFocus: boolean = false;

  @ViewChild(MatInput)
  inputField!: MatInput;

  public control!: FormControl;
  public FieldType = FieldType;

  constructor(public formGroupDir: FormGroupDirective) {}

  ngOnInit(): void {
    /**
     * https://angular.io/api/forms/FormGroupDirective
     * "Binds an existing FormGroup to a DOM element."
     *
     * We can easily access Reactive Forms functionality from this component in our
     * parent component without the need to pass our own inputs or event emitters.
     */
    this.control = this.formGroupDir.control.get(this.field.name) as FormControl;
  }

  ngAfterViewInit(): void {
    if (this.shouldFocus) {
      setTimeout(() => this.inputField.focus(), 1);
    }
  }

  get fieldPlaceholder() {
    return this.field.placeholder || '';
  }
}
