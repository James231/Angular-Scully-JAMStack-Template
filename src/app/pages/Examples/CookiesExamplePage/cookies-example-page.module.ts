import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookiesExamplePageRoutingModule } from './cookies-example-page-routing.module';
import { CookiesExamplePageComponent } from './cookies-example-page.component';
import { SharedModule } from '../../../shared.module';

// import { ExampleButtonComponent } from './../../../components/ExampleButtonComponent/example-button.component';

@NgModule({
  declarations: [
    CookiesExamplePageComponent,

    // Add local page components here:
    // ExampleButtonComponent,
  ],
  imports: [
    CommonModule,
    CookiesExamplePageRoutingModule,
    SharedModule
  ]
})
export class CookiesExamplePageModule { }
