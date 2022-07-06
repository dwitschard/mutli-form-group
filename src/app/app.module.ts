import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from "./components/navbar/navbar.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: 'option-1',
        loadChildren: () => import('./features/option-1/option-1.module').then((m) => m.Option1Module),
      },
      {
        path: 'option-2',
        loadChildren: () => import('./features/option-2/option-2.module').then((m) => m.Option2Module),
      },
      {
        path: 'option-3',
        loadChildren: () => import('./features/option-3/option-3.module').then((m) => m.Option3Module),
      },
      {
        path: 'option-4',
        loadChildren: () => import('./features/option-4/option-4.module').then((m) => m.Option4Module),
      },
      {
        path: '**',
        redirectTo: 'option-1'
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
