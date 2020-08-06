import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneInfoComponent } from './gene-info.component';

describe('GeneInfoComponent', () => {
  let component: GeneInfoComponent;
  let fixture: ComponentFixture<GeneInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
