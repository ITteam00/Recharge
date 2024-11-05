import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargeStepsComponent } from './recharge-steps.component';

describe('RechargeStepsComponent', () => {
  let component: RechargeStepsComponent;
  let fixture: ComponentFixture<RechargeStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RechargeStepsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RechargeStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
