import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-bindings-example-page',
  templateUrl: './event-bindings-example-page.component.html',
  styleUrls: ['./event-bindings-example-page.component.scss']
})
export class EventBindingsExamplePageComponent implements OnInit {

  public text : string = "empty";

  constructor() { }

  ngOnInit(): void {
  }

  buttonPressed(): void {
    this.text = "Button pressed, event handled in page's TypeScript!";
  }
}
