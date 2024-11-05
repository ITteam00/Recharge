import { Component, OnInit } from '@angular/core';
import { StepService } from '../step.service';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-recharge-headers',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './recharge-headers.component.html',
  styleUrl: './recharge-headers.component.css'
})
export class RechargeHeadersComponent implements OnInit{
  currentStep: number = 1;
  currentPath: string | undefined;

  constructor(private stepService: StepService) {}

  ngOnInit() {
    this.stepService.currentStep$.subscribe(step => {
      this.currentStep = step;
    });
  }
}
