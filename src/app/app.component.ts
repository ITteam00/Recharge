import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SubmitButtonComponent} from "./components/submit-button/submit-button.component";
import {RechargeDetailsComponent} from "./components/recharge-details/recharge-details.component";
import {PhoneNumInputComponent} from "./components/phone-num-input/phone-num-input.component";
import {RechargeStepsComponent} from "./components/recharge-steps/recharge-steps.component";
import {AllRechargeInfoComponent} from "./components/all-recharge-info/all-recharge-info.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AllRechargeInfoComponent, RechargeStepsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Recharge';
}
