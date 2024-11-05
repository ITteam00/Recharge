import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargeConfirmationComponent } from './recharge-confirmation.component';

describe('RechargeConfirmationComponent', () => {
  let component: RechargeConfirmationComponent;
  let fixture: ComponentFixture<RechargeConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RechargeConfirmationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RechargeConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});