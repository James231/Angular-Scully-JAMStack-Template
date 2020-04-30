import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NetworkExamplePageComponent } from './network-example-page.component';

const routes: Routes = [{ path: '', component: NetworkExamplePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NetworkExamplePageRoutingModule { }
