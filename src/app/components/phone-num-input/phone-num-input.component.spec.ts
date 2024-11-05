import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneNumInputComponent } from './phone-num-input.component';

describe('PhoneNumInputComponent', () => {
  let component: PhoneNumInputComponent;
  let fixture: ComponentFixture<PhoneNumInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhoneNumInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhoneNumInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
