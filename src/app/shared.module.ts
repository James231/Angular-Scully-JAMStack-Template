/*
    What to import here:
        -  Components
    or    - Other Modules
    Which:
        - Are used in multiple pages
    or     - Are used in both pages and layouts

    Do not import:
    - Things which will be used in a single page -> import them into the page's module.ts file instead
    - Things used by layouts only -> import them into app.module.ts instead
*/

import { NgModule } from "@angular/core";

// Import your global components here:
import { ExampleButtonComponent } from './components/ExampleButtonComponent/example-button.component';


// Import other modules here:



@NgModule({
  imports: [

    // Add other modules here

  ],
  declarations: [

    // Add your global components here
    ExampleButtonComponent

  ],
  exports: [

    // Add your components here
    ExampleButtonComponent

    // Add other modules here

  ]
})

export class SharedModule { }