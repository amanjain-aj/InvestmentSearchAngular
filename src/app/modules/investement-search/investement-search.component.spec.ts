import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestementSearchComponent } from './investement-search.component';

describe('InvestementSearchComponent', () => {
  let component: InvestementSearchComponent;
  let fixture: ComponentFixture<InvestementSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestementSearchComponent]
    });
    fixture = TestBed.createComponent(InvestementSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
