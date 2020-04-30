import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkExamplePageComponent } from './network-example-page.component';

describe('LayoutExamplePageComponent', () => {
  let component: NetworkExamplePageComponent;
  let fixture: ComponentFixture<NetworkExamplePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkExamplePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkExamplePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
