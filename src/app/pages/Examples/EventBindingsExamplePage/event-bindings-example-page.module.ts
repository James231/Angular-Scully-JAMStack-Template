import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventBindingsExamplePageRoutingModule } from './event-bindings-example-page-routing.module';
import { EventBindingsExamplePageComponent } from './event-bindings-example-page.component';
import { SharedModule } from '../../../shared.module';

// import { ExampleButtonComponent } from './../../../components/ExampleButtonComponent/example-button.component';

@NgModule({
  declarations: [
    EventBindingsExamplePageComponent,

    // Add local page components here:
    // ExampleButtonComponent,
  ],
  imports: [
    CommonModule,
    EventBindingsExamplePageRoutingModule,
    SharedModule
  ]
})
export class EventBindingsExamplePageModule { }
