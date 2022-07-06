import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {StaticChildWrapperComponent} from './containers/static-child-wrapper/static-child-wrapper.component';
import {CompanyFormComponent} from "./components/company-form/company-form.component";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{
      path: '',
      component: StaticChildWrapperComponent
    }]),
    ReactiveFormsModule
  ],
  declarations: [
    StaticChildWrapperComponent,
    CompanyFormComponent,
  ]
})
export class Option2Module {
}
