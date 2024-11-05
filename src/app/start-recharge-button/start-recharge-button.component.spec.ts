import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartRechargeButtonComponent } from './start-recharge-button.component';

describe('StartRechargeButtonComponent', () => {
  let component: StartRechargeButtonComponent;
  let fixture: ComponentFixture<StartRechargeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartRechargeButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StartRechargeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
