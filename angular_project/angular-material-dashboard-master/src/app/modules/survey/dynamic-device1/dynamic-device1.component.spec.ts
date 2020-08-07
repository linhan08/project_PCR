import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDevice1Component } from './dynamic-device1.component';

describe('DynamicDevice1Component', () => {
  let component: DynamicDevice1Component;
  let fixture: ComponentFixture<DynamicDevice1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicDevice1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicDevice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
