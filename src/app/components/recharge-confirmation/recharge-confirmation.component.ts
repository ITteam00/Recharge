import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CurrencyPipe} from "@angular/common";

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

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.phoneNumber = params['phoneNumber'];
      this.promotion = params['promotion'];
      this.paymentAmount = +params['paymentAmount'];
      this.amountReceived = +params['amountReceived'];
    });
  }
}
