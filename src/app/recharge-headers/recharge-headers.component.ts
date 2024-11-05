import { Component } from '@angular/core';
import { StepService } from '../step.service';

@Component({
  selector: 'app-recharge-headers',
  standalone: true,
  imports: [],
  templateUrl: './recharge-headers.component.html',
  styleUrl: './recharge-headers.component.css'
})
export class RechargeHeadersComponent {
  currentStep: number = 1;

  constructor(private stepService: StepService) {}

  ngOnInit() {
    this.stepService.currentStep$.subscribe(step => {
      this.currentStep = step;
    });
  }
}
