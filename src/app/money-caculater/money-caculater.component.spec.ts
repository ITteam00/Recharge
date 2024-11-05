import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyCaculaterComponent } from './money-caculater.component';

describe('MoneyCaculaterComponent', () => {
  let component: MoneyCaculaterComponent;
  let fixture: ComponentFixture<MoneyCaculaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoneyCaculaterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoneyCaculaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
