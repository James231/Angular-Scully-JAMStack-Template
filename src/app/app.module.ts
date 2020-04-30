/*
    Import things only for layouts in here:
    - Import components used in layouts (and not used in the actual page's html)
    - Import overlays (which are components used in layouts)
    - Import layouts themselves
    - Import other modules used only for layouts

    For things used in:
    - Both Pages and Layouts -> Import them into 'imports.module.ts' and nowhere else
    - One Page -> Import them into the page's module.ts file, and nowhere else
    - Multiple Pages -> Import them into 'imports.module.ts' and nowhere else
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';

// Import LAYOUTS below:
import { ExampleLayout } from "./layouts/ExampleLayout/examplelayout.component";

// Import COMPONENTS below (for only layouts to use):
// import { SideNavComponent } from "./components/SideNav/sidenav.component";

@NgModule({
  declarations: [
    AppComponent,

    // Add layouts here
    ExampleLayout


    // Add components (for layouts) here

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule

    // Add other modules here (which are only used in layouts)
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
