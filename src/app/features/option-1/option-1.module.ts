import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DynamicChildWrapperComponent} from './containers/dynamic-child-wrapper/dynamic-child-wrapper.component';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {UserFormComponent} from "./components/user-form/user-form.component";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{
      path: '',
      component: DynamicChildWrapperComponent
    }]),
    ReactiveFormsModule
  ],
  declarations: [
    DynamicChildWrapperComponent,
    UserFormComponent,
  ]
})
export class Option1Module {
}
