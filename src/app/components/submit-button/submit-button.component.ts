import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

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

  constructor(private router: Router) {}

  onSubmit() {
    this.router.navigate(['/confirmation'], {
      queryParams: {
        phoneNumber: this.phoneNumber,
        promotion: this.promotion,
        paymentAmount: this.paymentAmount,
        amountReceived: this.amountReceived
      }
    });
  }
}
