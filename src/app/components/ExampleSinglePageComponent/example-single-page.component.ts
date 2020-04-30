import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'ExampleSinglePageButton',
  templateUrl: './example-single-page.component.html',
  styleUrls: ['./example-single-page.component.scss']
})
export class ExampleSinglePageComponent implements OnInit {

  @Input()
  public title: string = "default title";

  constructor() { }

  ngOnInit(): void {
  }
}
