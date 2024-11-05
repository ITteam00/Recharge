import { Component } from '@angular/core';
import { PhoneInputComponent } from "../phone-input/phone-input.component";
import { MoneyCalculateComponent } from "../money-calculate/money-calculate.component";
import { RechargeButtonComponent } from "../recharge-button/recharge-button.component";
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StepService } from '../step.service';
@Component({
  selector: 'app-recharge-form',
  standalone: true,
  imports: [PhoneInputComponent,RouterModule,FormsModule, MoneyCalculateComponent, RechargeButtonComponent],
  templateUrl: './recharge-form.component.html',
  styleUrl: './recharge-form.component.css'
})
export class RechargeFormComponent {
  constructor(private stepService: StepService) {}

  updateStep(step: number) {
    this.stepService.setStep(step);
  }
}
