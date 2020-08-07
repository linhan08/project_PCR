import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicChemical1Component } from './dynamic-chemical1.component';

describe('DynamicChemical1Component', () => {
  let component: DynamicChemical1Component;
  let fixture: ComponentFixture<DynamicChemical1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicChemical1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicChemical1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
