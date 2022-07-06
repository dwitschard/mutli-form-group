import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {DynamicFormComponent} from './dynamic-form.component';
import {AppTestingModule} from '@shared/testing/app/app-testing.module';
import {MaterialTestingModule} from '@shared/testing/material/material-testing.module';

describe('DynamicFormComponent', () => {
  let component: DynamicFormComponent;
  let fixture: ComponentFixture<DynamicFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AppTestingModule, MaterialTestingModule],
      declarations: [],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormComponent);
    component = fixture.componentInstance;
    component.fieldset = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
