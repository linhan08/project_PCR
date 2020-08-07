import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicChemical2Component } from './dynamic-chemical2.component';

describe('DynamicChemical2Component', () => {
  let component: DynamicChemical2Component;
  let fixture: ComponentFixture<DynamicChemical2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicChemical2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicChemical2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
