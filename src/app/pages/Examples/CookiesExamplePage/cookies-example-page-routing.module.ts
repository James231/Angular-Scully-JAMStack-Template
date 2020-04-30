import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CookiesExamplePageComponent } from './cookies-example-page.component';

const routes: Routes = [{ path: '', component: CookiesExamplePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CookiesExamplePageRoutingModule { }
