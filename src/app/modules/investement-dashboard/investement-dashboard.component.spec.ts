import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestementDashboardComponent } from './investement-dashboard.component';

describe('InvestementDashboardComponent', () => {
  let component: InvestementDashboardComponent;
  let fixture: ComponentFixture<InvestementDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestementDashboardComponent],
    });
    fixture = TestBed.createComponent(InvestementDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
