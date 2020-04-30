import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsExamplePageRoutingModule } from './components-example-page-routing.module';
import { ComponentsExamplePageComponent } from './components-example-page.component';
import { SharedModule } from '../../../shared.module';

// Import local page components here
import { ExampleSinglePageComponent } from './../../../components/ExampleSinglePageComponent/example-single-page.component';

@NgModule({
  declarations: [
    ComponentsExamplePageComponent,

    // Add local page components here:
    ExampleSinglePageComponent,
  ],
  imports: [
    CommonModule,
    ComponentsExamplePageRoutingModule,
    SharedModule
  ]
})
export class ComponentsExamplePageModule { }
