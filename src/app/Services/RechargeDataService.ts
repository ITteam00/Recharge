import {Injectable} from '@angular/core';
import {RechargeData} from "./RechargeDataModel";

@Injectable({
  providedIn: 'root'
})

export class RechargeDataService {

  rechargeData: RechargeData={
    phoneNumber: '',
    promotion: '',
    paymentAmount: 0,
    amountReceived: 0
  }

  public setRechargeData(data: RechargeData) {
    console.log('Setting data in service:', data);
    this.rechargeData.phoneNumber = data.phoneNumber;
    this.rechargeData.promotion = data.promotion;
    this.rechargeData.paymentAmount= data.paymentAmount;
    this.rechargeData.amountReceived = data.amountReceived;
  }

  getRechargeData() {
    const data = {
      phoneNumber: this.rechargeData.phoneNumber,
      promotion: this.rechargeData.promotion,
      paymentAmount: this.rechargeData.paymentAmount,
      amountReceived: this.rechargeData.amountReceived
    };
    console.log(data);
    return data;
  }
}
