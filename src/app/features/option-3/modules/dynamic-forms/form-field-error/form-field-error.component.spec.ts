import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FormFieldErrorComponent} from './form-field-error.component';
import {TranslateService} from '@ngx-translate/core';
import {AppTestingModule} from '@shared/testing/app/app-testing.module';
import {MaterialTestingModule} from '@shared/testing/material/material-testing.module';

describe('FormFieldErrorComponent', () => {
  let component: FormFieldErrorComponent;
  let fixture: ComponentFixture<FormFieldErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppTestingModule, MaterialTestingModule],
      declarations: [],
      providers: [TranslateService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
