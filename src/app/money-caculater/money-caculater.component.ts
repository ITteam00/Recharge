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
}
