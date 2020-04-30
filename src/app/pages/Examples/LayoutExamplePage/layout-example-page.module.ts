import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutExamplePageRoutingModule } from './layout-example-page-routing.module';
import { LayoutExamplePageComponent } from './layout-example-page.component';
import { SharedModule } from '../../../shared.module';

// import { ExampleButtonComponent } from './../../../components/ExampleButtonComponent/example-button.component';

@NgModule({
  declarations: [
    LayoutExamplePageComponent,

    // Add local page components here:
    // ExampleButtonComponent,
  ],
  imports: [
    CommonModule,
    LayoutExamplePageRoutingModule,
    SharedModule
  ]
})
export class LayoutExamplePageModule { }
