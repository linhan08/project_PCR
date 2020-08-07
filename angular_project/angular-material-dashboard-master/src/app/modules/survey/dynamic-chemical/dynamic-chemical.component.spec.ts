import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicChemicalComponent } from './dynamic-chemical.component';

describe('DynamicChemicalComponent', () => {
  let component: DynamicChemicalComponent;
  let fixture: ComponentFixture<DynamicChemicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicChemicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicChemicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
