import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'app-money-calculate',
  standalone: true,
  imports: [NgIf],
  templateUrl: './money-calculate.component.html',
  styleUrl: './money-calculate.component.css',
})
export class MoneyCalculateComponent {
  selectedAmount: number = 100;
  discountRate: number = 0;
  paymentAmount: number = 100;
  receivedAmount: number = 100;
  isValid: boolean = true;

  constructor(private validationService: ValidationService) {}

  updateDiscount(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.discountRate = parseFloat(selectElement.value);
    this.updateAmounts();
  }

  selectAmount(amount: number) {
    this.selectedAmount = amount;
    this.updateAmounts();
  }

  updateCustomAmount(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const amount = parseFloat(inputElement.value);
    if (inputElement.value === '') {
      this.selectedAmount = 0;
      this.updateAmounts();
    } else if (!isNaN(amount) && amount >= 10 && amount <= 3000) {
      this.selectedAmount = amount;
      this.updateAmounts();
    } 
    this.validationService.setAmount(this.selectedAmount);
    this.validateAmount();
  }

  updateAmounts() {
    this.paymentAmount = this.selectedAmount * (1 - this.discountRate / 100);
    this.receivedAmount = this.selectedAmount;
  }
  isActive(amount: number): boolean {
    return this.selectedAmount === amount;
  }

  validateAmount() {
    const isValid = this.selectedAmount >= 10 && this.selectedAmount <= 3000;
    this.validationService.setAmountValid(isValid);
  }
}
