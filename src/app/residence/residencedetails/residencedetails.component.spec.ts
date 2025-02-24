import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidencedetailsComponent } from './residencedetails.component';

describe('ResidencedetailsComponent', () => {
  let component: ResidencedetailsComponent;
  let fixture: ComponentFixture<ResidencedetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResidencedetailsComponent]
    });
    fixture = TestBed.createComponent(ResidencedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
