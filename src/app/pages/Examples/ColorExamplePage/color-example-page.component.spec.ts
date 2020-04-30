import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorExamplePageComponent } from './color-example-page.component';

describe('LayoutExamplePageComponent', () => {
  let component: ColorExamplePageComponent;
  let fixture: ComponentFixture<ColorExamplePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorExamplePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorExamplePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
