import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutExamplePageComponent } from './layout-example-page.component';

const routes: Routes = [{ path: '', component: LayoutExamplePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutExamplePageRoutingModule { }
