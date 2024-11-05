import { Component } from '@angular/core';
import {PhoneNumInputComponent} from "../phone-num-input/phone-num-input.component";
import {RechargeDetailsComponent} from "../recharge-details/recharge-details.component";
import {SubmitButtonComponent} from "../submit-button/submit-button.component";

@Component({
  selector: 'app-all-recharge-info',
  standalone: true,
  imports: [
    PhoneNumInputComponent,
    RechargeDetailsComponent,
    SubmitButtonComponent
  ],
  templateUrl: './all-recharge-info.component.html',
  styleUrl: './all-recharge-info.component.css'
})
export class AllRechargeInfoComponent {

}
