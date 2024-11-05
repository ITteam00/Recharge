import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {RechargeDataService} from "../../Services/RechargeDataService";

@Component({
  selector: 'app-submit-button',
  standalone: true,
  imports: [],
  templateUrl: './submit-button.component.html',
  styleUrl: './submit-button.component.css'
})
export class SubmitButtonComponent {
  @Input() phoneNumber: string = '';
  @Input() promotion: string = '';
  @Input() paymentAmount: number = 0;
  @Input() amountReceived: number = 0;

  constructor(private router: Router,private rechargeDataService: RechargeDataService) {}

  onSubmit() {
    const rechargeData = this.rechargeDataService.getRechargeData();
    this.router.navigate(['/confirmation'], {
      queryParams: {
        phoneNumber: rechargeData.phoneNumber,
        promotion: rechargeData.promotion,
        paymentAmount: rechargeData.paymentAmount,
        amountReceived: rechargeData.amountReceived
      }
    });
  }
}
