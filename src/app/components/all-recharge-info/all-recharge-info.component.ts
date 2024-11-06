import {Component, OnInit} from '@angular/core';
import {PhoneNumInputComponent} from "../phone-num-input/phone-num-input.component";
import {RechargeDetailsComponent} from "../recharge-details/recharge-details.component";
import {SubmitButtonComponent} from "../submit-button/submit-button.component";
import {RechargeDataService} from "../../Services/RechargeDataService";

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
