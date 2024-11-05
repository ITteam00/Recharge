import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirm-pay',
  standalone: true,
  imports: [],
  templateUrl: './confirm-pay.component.html',
  styleUrl: './confirm-pay.component.css'
})
export class ConfirmPayComponent implements OnInit {
  paymentAmount: number = 0;
  rechargeAmount: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.paymentAmount = +params['paymentAmount'];
      this.rechargeAmount = +params['rechargeAmount'];
    });
  }


}
