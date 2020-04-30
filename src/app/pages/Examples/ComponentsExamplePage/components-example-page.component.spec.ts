import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsExamplePageComponent } from './components-example-page.component';

describe('ComponentsExamplePageComponent', () => {
  let component: ComponentsExamplePageComponent;
  let fixture: ComponentFixture<ComponentsExamplePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsExamplePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsExamplePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
