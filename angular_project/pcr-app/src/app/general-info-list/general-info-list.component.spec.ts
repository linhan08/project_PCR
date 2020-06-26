import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInfoListComponent } from './general-info-list.component';

describe('GeneralInfoListComponent', () => {
  let component: GeneralInfoListComponent;
  let fixture: ComponentFixture<GeneralInfoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralInfoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralInfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
