import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyEssentialComponent } from './company-essential.component';

describe('CompanyEssentialComponent', () => {
  let component: CompanyEssentialComponent;
  let fixture: ComponentFixture<CompanyEssentialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyEssentialComponent]
    });
    fixture = TestBed.createComponent(CompanyEssentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
