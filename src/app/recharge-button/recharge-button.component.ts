import { Component, QueryList } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recharge-button',
  standalone: true,
  imports: [],
  templateUrl: './recharge-button.component.html',
  styleUrl: './recharge-button.component.css'
})
export class RechargeButtonComponent {
  constructor(private router: Router) {}
  navigateConfirmAndPay(){
    this.router.navigate(['/confirm-pay'])
  }
}
