import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventBindingsExamplePageComponent } from './event-bindings-example-page.component';

const routes: Routes = [{ path: '', component: EventBindingsExamplePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventBindingsExamplePageRoutingModule { }
