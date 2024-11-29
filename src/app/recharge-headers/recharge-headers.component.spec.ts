import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargeHeadersComponent } from './recharge-headers.component';

describe('RechargeHeadersComponent', () => {
  let component: RechargeHeadersComponent;
  let fixture: ComponentFixture<RechargeHeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RechargeHeadersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RechargeHeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
