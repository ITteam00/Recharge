import {Component, input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CurrencyPipe} from "@angular/common";
import {RechargeDataService} from "../../Services/RechargeDataService";

@Component({
  selector: 'app-recharge-confirmation',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './recharge-confirmation.component.html',
  styleUrl: './recharge-confirmation.component.css'
})
export class RechargeConfirmationComponent implements OnInit {
  phoneNumber: string = '';
  promotion: string = '';
  paymentAmount: number = 0;
  amountReceived: number = 0;

  constructor(private route: ActivatedRoute,private rechargeDataService: RechargeDataService) {}

  ngOnInit() {
    const rechargeData = this.rechargeDataService.getRechargeData();
    this.phoneNumber = rechargeData.phoneNumber;
    this.promotion = rechargeData.promotion;
    this.paymentAmount = rechargeData.paymentAmount;
    this.amountReceived = rechargeData.amountReceived;
  }
}
