import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";

interface Promotion {
  id: string;
  name: string;
  discount: number;
}

@Component({
  selector: 'app-recharge-details',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './recharge-details.component.html',
  styleUrl: './recharge-details.component.css'
})
export class RechargeDetailsComponent implements OnInit {
  predefinedAmounts: number[] = [30, 50, 100, 300, 500];
  selectedAmount: number | null = null;
  customAmount: string = '';

  @Input() amounts: number[] = [];
  @Output() amountChange = new EventEmitter<number>();
  ngOnInit() {
    this.selectAmount(100); // 默认选中 100
  }
  promotions: Promotion[] = [
    { id: '1', name: 'Mobile Store Recharge 5% Discount', discount: 0.05 },
    { id: '2', name: 'Mobile Store Recharge 20% Discount', discount: 0.20 }
  ];

  selectedPromotionId: string = '';
  selectedPromotion: Promotion | null = null;

  onPromotionChange() {
    this.selectedPromotion = this.promotions.find(p => p.id === this.selectedPromotionId) || null;
  }

  onAmountChange(amount: number) {
    this.selectedAmount = amount;
    this.amountChange.emit(amount);
  }

  selectAmount(amount: number) {
    this.selectedAmount = amount;
    this.customAmount = '';
    this.amountChange.emit(amount);
  }

  onCustomAmountChange() {
    const amount = parseFloat(this.customAmount);
    if (!isNaN(amount) && amount >= 10 && amount <= 3000 && Number.isInteger(amount)) {
      this.selectedAmount = null;
      this.amountChange.emit(amount);
    }
  }

  validateCustomAmount() {
    const amount = parseFloat(this.customAmount);
    if (isNaN(amount) || amount < 10 || amount > 3000 || !Number.isInteger(amount)) {
      alert('Please enter a valid amount between 10 and 3000. It must be an integer.');
      this.customAmount = '';
      this.selectedAmount = null;
    }
  }
}
