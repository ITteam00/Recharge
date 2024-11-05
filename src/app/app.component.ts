import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RechargeHeaderComponent } from "./recharge-header/recharge-header.component";
import { RechargeFormComponent } from "./recharge-form/recharge-form.component";
import { PhoneInputComponent } from "./phone-input/phone-input.component";
import { MoneyCaculaterComponent } from "./money-caculater/money-caculater.component";
import { RechargeButtonComponent } from "./recharge-button/recharge-button.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RechargeHeaderComponent, RechargeFormComponent, PhoneInputComponent, MoneyCaculaterComponent, RechargeButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Recharge';
}
