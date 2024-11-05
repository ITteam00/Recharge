import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-recharge-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recharge-header.component.html',
  styleUrl: './recharge-header.component.css'
})
export class RechargeHeaderComponent implements OnInit{
  activeStep: number = 1;
 
  constructor(private router: Router) {
 
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.updateActiveStep(val.url);
      }
    });
  }
 
  ngOnInit() {
    this.updateActiveStep(this.router.url);
 
  }

 
  updateActiveStep(url: string) {
    const cleanUrl = url.split('?')[0]; 
    if (cleanUrl === '/recharge') {
      this.activeStep = 1;
    } else if (cleanUrl.startsWith('/confirm-pay')) {
      this.activeStep = 2;
    } else {
      this.activeStep = 3;
    }
  }

}
