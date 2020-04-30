import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NetworkExamplePageRoutingModule } from './network-example-page-routing.module';
import { NetworkExamplePageComponent } from './network-example-page.component';
import { SharedModule } from '../../../shared.module';

// import { ExampleButtonComponent } from './../../../components/ExampleButtonComponent/example-button.component';

@NgModule({
  declarations: [
    NetworkExamplePageComponent,

    // Add local page components here:
    // ExampleButtonComponent,
  ],
  imports: [
    CommonModule,
    NetworkExamplePageRoutingModule,
    SharedModule
  ]
})
export class NetworkExamplePageModule { }
