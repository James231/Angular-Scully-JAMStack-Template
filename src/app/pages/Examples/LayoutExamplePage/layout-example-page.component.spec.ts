import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutExamplePageComponent } from './layout-example-page.component';

describe('LayoutExamplePageComponent', () => {
  let component: LayoutExamplePageComponent;
  let fixture: ComponentFixture<LayoutExamplePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutExamplePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutExamplePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
