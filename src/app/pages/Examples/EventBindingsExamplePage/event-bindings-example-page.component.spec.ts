import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBindingsExamplePageComponent } from './event-bindings-example-page.component';

describe('EventBindingsExamplePageComponent', () => {
  let component: EventBindingsExamplePageComponent;
  let fixture: ComponentFixture<EventBindingsExamplePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventBindingsExamplePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBindingsExamplePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
