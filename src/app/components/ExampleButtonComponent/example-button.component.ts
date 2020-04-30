import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'ExampleButton',
  templateUrl: './example-button.component.html',
  styleUrls: ['./example-button.component.scss']
})
export class ExampleButtonComponent implements OnInit {

  @Input()
  public title: string = "default title";

  @Output()
  public tap = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public buttonPressed(): void {
    if (this.tap != null) {
        this.tap.emit();
    }
  }
}
