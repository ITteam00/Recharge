import { Component, EventEmitter, Output } from '@angular/core';
import { ValidationService } from '../validation.service';
import { combineLatest } from 'rxjs';
import { Router } from '@angular/router';
import { StepService } from '../step.service';

@Component({
  selector: 'app-recharge-button',
  standalone: true,
  imports: [],
  templateUrl: './recharge-button.component.html',
  styleUrl: './recharge-button.component.css'
})
export class RechargeButtonComponent {
  @Output() stepChange = new EventEmitter<number>();
  isFormValid: boolean = true;
  phoneNumber: string = '';
  amount: number = 0;
  updateStep(step: number) {
    this.stepService.setStep(step);
  }
  constructor(private validationService: ValidationService, private stepService: StepService, private router: Router) {
    combineLatest([
      this.validationService.phoneValid$,
      this.validationService.amountValid$,
      this.validationService.phoneNumber$,
      this.validationService.amount$
    ]).subscribe(([isPhoneValid, isAmountValid, phone, amount]) => {
      this.isFormValid = isPhoneValid && isAmountValid;
      this.phoneNumber = phone;
      this.amount = amount;
    });
  }

  navigateToConfirmation() {
    this.router.navigate(['/confirmation'], { queryParams: { phone: this.phoneNumber, amount: this.amount } });
    this.stepService.setStep(2); 
  }
}
