import { Component } from '@angular/core';
import { ValidationService } from '../validation.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-recharge-button',
  standalone: true,
  imports: [],
  templateUrl: './recharge-button.component.html',
  styleUrl: './recharge-button.component.css'
})
export class RechargeButtonComponent {
  isFormValid: boolean = true;

  constructor(private validationService: ValidationService) {
    combineLatest([
      this.validationService.phoneValid$,
      this.validationService.amountValid$
    ]).subscribe(([isPhoneValid, isAmountValid]) => {
      this.isFormValid = isPhoneValid && isAmountValid;
    });
  }
}
