import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleSinglePageComponent } from './example-single-page.component';

describe('ExampleButtonComponent', () => {
  let component: ExampleSinglePageComponent;
  let fixture: ComponentFixture<ExampleSinglePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleSinglePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleSinglePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
