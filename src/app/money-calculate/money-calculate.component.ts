import { Component } from '@angular/core';

@Component({
  selector: 'app-money-calculate',
  standalone: true,
  imports: [],
  templateUrl: './money-calculate.component.html',
  styleUrl: './money-calculate.component.css'
})
export class MoneyCalculateComponent {
  selectedAmount: number = 100;
  discountRate: number = 0;
  paymentAmount: number = 100;
  receivedAmount: number = 100;

  updateDiscount(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.discountRate = parseFloat(selectElement.value);
    this.updateAmounts();
  }

  selectAmount(amount: number) {
    this.selectedAmount = amount;
    this.updateAmounts();
  }

  updateCustomAmount(value: string) {
    const amount = parseFloat(value);
    if (!isNaN(amount) && amount >= 10 && amount <= 3000) {
      this.selectedAmount = amount;
      this.updateAmounts();
    }
  }

  updateAmounts() {
    this.paymentAmount = this.selectedAmount * (1 - this.discountRate / 100);
    this.receivedAmount = this.selectedAmount;
  }
}
