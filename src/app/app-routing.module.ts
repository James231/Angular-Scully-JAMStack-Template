import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import layouts
import { ExampleLayout } from "./layouts/ExampleLayout/examplelayout.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/HomePage/home.module').then(m => m.HomePageModule),
  },
  { path: 'examples/color', loadChildren: () => import('./pages/Examples/ColorExamplePage/color-example-page.module').then(m => m.ColorExamplePageModule) },
  { path: 'examples/components', loadChildren: () => import('./pages/Examples/ComponentsExamplePage/components-example-page.module').then(m => m.ComponentsExamplePageModule) },
  { path: 'examples/eventbindings', loadChildren: () => import('./pages/Examples/EventBindingsExamplePage/event-bindings-example-page.module').then(m => m.EventBindingsExamplePageModule) },
  { path: 'examples/cookies', loadChildren: () => import('./pages/Examples/CookiesExamplePage/cookies-example-page.module').then(m => m.CookiesExamplePageModule) },
  { path: 'examples/network', loadChildren: () => import('./pages/Examples/NetworkExamplePage/network-example-page.module').then(m => m.NetworkExamplePageModule) },
  {
        // Pages which inherit from ExampleLayout
        path: "",
        component: ExampleLayout,
        children: [
            { path: "examples/layouts", loadChildren: () => import('./pages/Examples/LayoutExamplePage/layout-example-page.module').then(m => m.LayoutExamplePageModule) }
        ]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
