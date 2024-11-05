// recharge-data.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RechargeDataService {
  phoneNumber: string = '';
  promotion: string = '';
  paymentAmount: number = 0;
  amountReceived: number = 0;

  setRechargeData(data: any) {
    console.log('Setting data in service:', data);
    this.phoneNumber = data.phoneNumber;
    this.promotion = data.promotion;
    this.paymentAmount = data.paymentAmount;
    this.amountReceived = data.amountReceived;
  }

  getRechargeData() {
    const data={
      phoneNumber: this.phoneNumber,
      promotion: this.promotion,
      paymentAmount: this.paymentAmount,
      amountReceived: this.amountReceived
    };
    console.log(data);
    return data;
  }
}
