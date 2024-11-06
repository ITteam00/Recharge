import { Component, Input } from '@angular/core';
import { PhoneInputComponent } from "../phone-input/phone-input.component";
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-recharge-form',
  standalone: true,
  imports: [PhoneInputComponent, ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './recharge-form.component.html',
  styleUrl: './recharge-form.component.css'
})
export class RechargeFormComponent {
  phoneForm: FormGroup
  constructor(private router: Router,private fb: FormBuilder){
    this.phoneForm = this.fb.group({
      phone: ['', [Validators.required, Validators.pattern('^1[0-9]{10}$')]]
    });
  }
  phoneNumber:string=""
  isValid:boolean=false

  onHandlerPhoneNumberChange($event:[string,boolean]){
    this.phoneNumber=$event[0]
    this.isValid=$event[1]
  }
  
  payment:number=0
  amount:number=0
  navigateConfirmAndPay(){
    this.router.navigate(['/confirm-pay'],{queryParams: {
      phoneNumber:this.phoneNumber,
      amount: this.amountReceived,
      paymentAmount: this.paymentAmount}
    })
  }

  selectedType = "None";
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
