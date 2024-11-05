import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyCalculateComponent } from './money-calculate.component';

describe('MoneyCalculateComponent', () => {
  let component: MoneyCalculateComponent;
  let fixture: ComponentFixture<MoneyCalculateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoneyCalculateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoneyCalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
