import {AsyncValidatorFn, ValidatorFn} from '@angular/forms';
import {BehaviorSubject, Observable} from 'rxjs';

export enum FieldType {
  CHECKBOX,
  DATEPICKER,
  RADIO,
  SELECTDROPDOWN,
  SELECTLIST,
  SLIDETOGGLE,
  TEXTAREA,
  TEXTFIELD,
  SUBHEADER,
  DIVIDER,
  AUTOCOMPLETE,
  HIDDEN,
}

export enum HtmlInputType {
  TEXT = 'text',
  PASSWROD = 'password',
  NUMBER = 'number',
}

export interface Field {
  name: string;
  label: string;
   type: FieldType;
  htmlInputType?: HtmlInputType;
  placeholder?: string;
  children?: Field[];
  defaultValue?: any;
  disabled?: boolean;
  options?: any[];
  optionsDisplayFn?: (item: any) => string;
  autocompleteActivateFirstOption?: boolean;
  autocompleteLoading$?: BehaviorSubject<boolean>;
  options$?: Observable<any[]>;
  parent?: string;
  validation?: ValidatorFn[];
  asyncValidation?: AsyncValidatorFn[];
  visible?: boolean;
  hint?: string;
}

export interface KeyValuePair {
  key: string;
  value: any;
}
