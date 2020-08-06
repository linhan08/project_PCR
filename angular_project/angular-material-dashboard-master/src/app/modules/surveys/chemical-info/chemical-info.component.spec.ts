import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemicalInfoComponent } from './chemical-info.component';

describe('ChemicalInfoComponent', () => {
  let component: ChemicalInfoComponent;
  let fixture: ComponentFixture<ChemicalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChemicalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChemicalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
