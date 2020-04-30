import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsExamplePageComponent } from './components-example-page.component';

const routes: Routes = [{ path: '', component: ComponentsExamplePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsExamplePageRoutingModule { }
