import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorExamplePageComponent } from './color-example-page.component';

const routes: Routes = [{ path: '', component: ColorExamplePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColorExamplePageRoutingModule { }
