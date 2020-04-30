import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiesExamplePageComponent } from './cookies-example-page.component';

describe('LayoutExamplePageComponent', () => {
  let component: CookiesExamplePageComponent;
  let fixture: ComponentFixture<CookiesExamplePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookiesExamplePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookiesExamplePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
