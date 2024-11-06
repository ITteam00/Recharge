import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRechargeInfoComponent } from './all-recharge-info.component';

describe('AllRechargeInfoComponent', () => {
  let component: AllRechargeInfoComponent;
  let fixture: ComponentFixture<AllRechargeInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllRechargeInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllRechargeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
