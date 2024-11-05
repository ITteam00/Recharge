import { Component } from '@angular/core';
import { PhoneInputComponent } from "../phone-input/phone-input.component";
import { MoneyCaculaterComponent } from "../money-caculater/money-caculater.component";
import { RechargeButtonComponent } from "../recharge-button/recharge-button.component";
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recharge-form',
  standalone: true,
  imports: [PhoneInputComponent, MoneyCaculaterComponent, RechargeButtonComponent],
  templateUrl: './recharge-form.component.html',
  styleUrl: './recharge-form.component.css'
})
export class RechargeFormComponent {
  constructor(private router: Router){}
  phoneNumber:string=""
  payment:number=0
  amount:number=0

  onPhoneNumberChange(phone:string){
    this.phoneNumber = phone;
  }

  onPaymentChange(payment:string){
    this.payment = Number(payment);
  }

  onAmountChange(amount:string){
    this.amount = Number(amount);
  }

  navigateConfirmAndPay(){
    this.router.navigate(['/confirm-pay'],{queryParams: {
      phone:this.phoneNumber,
      amount: this.amount,
      paymentAmount: this.payment}
    })
  }
}
