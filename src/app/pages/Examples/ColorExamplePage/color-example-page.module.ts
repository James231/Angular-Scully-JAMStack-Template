import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorExamplePageRoutingModule } from './color-example-page-routing.module';
import { ColorExamplePageComponent } from './color-example-page.component';
import { SharedModule } from '../../../shared.module';

// import { ExampleButtonComponent } from './../../../components/ExampleButtonComponent/example-button.component';

@NgModule({
  declarations: [
    ColorExamplePageComponent,

    // Add local page components here:
    // ExampleButtonComponent,
  ],
  imports: [
    CommonModule,
    ColorExamplePageRoutingModule,
    SharedModule
  ]
})
export class ColorExamplePageModule { }
