import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-example-page',
  templateUrl: './layout-example-page.component.html',
  styleUrls: ['./layout-example-page.component.scss']
})
export class LayoutExamplePageComponent implements OnInit {

  public text : string = "empty";

  constructor() { }

  ngOnInit(): void {
  }
}
