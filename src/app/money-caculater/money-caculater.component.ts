import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-money-caculater',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './money-caculater.component.html',
  styleUrl: './money-caculater.component.css'
})
export class MoneyCaculaterComponent {
  promotionTypes = [
    "None",
    "Discount - Mobile Store Recharge 9.95% Discount",
    "Discount - Mobile Store Recharge 8.0% Discount"
  ];
  selectedType = this.promotionTypes[0];
  discount: number = 0
  paymentAmount: number | null = null
  amountReceived: number | null = null
  inputValue: number | null = null



  public updateDiscount() {
    if (this.selectedType === "Discount - Mobile Store Recharge 9.0% Discount") {
      this.discount = 0.09
    }
    if (this.selectedType === "Discount - Mobile Store Recharge 8.0% Discount") {
      this.discount = 0.08
    }
    if (this.selectedType === "None") {
      this.discount = 0
    }
  }


  onDiscountChange() {
    this.updateDiscount();
    this.calculateAmount();
  }

  setAmount(amount: number) {
    this.amountReceived = amount;
    this.calculateAmount()
  }

  calculateAmount() {
    this.paymentAmount = (this.amountReceived as number) * (1 - this.discount);
  }


  checkValue() {
    if (this.inputValue === null || this.inputValue === undefined) {
      this.inputValue = null;
    }
    else {
      this.amountReceived = this.inputValue
      this.calculateAmount()
    }
  }

  clearValue() {
    if (this.inputValue === null) {
      this.inputValue = null;
    }
  }

}
