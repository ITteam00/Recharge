import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargeButtonComponent } from './recharge-button.component';

describe('RechargeButtonComponent', () => {
  let component: RechargeButtonComponent;
  let fixture: ComponentFixture<RechargeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RechargeButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RechargeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
