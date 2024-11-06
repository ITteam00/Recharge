import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';

@Component({
  selector: 'app-confirm-pay',
  standalone: true,
  imports: [],
  templateUrl: './confirm-pay.component.html',
  styleUrl: './confirm-pay.component.css'
})
export class ConfirmPayComponent implements OnInit{
  amount: number | null = null;
  payment: number | null = null;
  phone=""
 
  constructor(private route: ActivatedRoute) {}
 
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.phone=params['phoneNumber']
      this.amount = params['amount'];
      this.payment = params['paymentAmount'];
    });
  }

}
