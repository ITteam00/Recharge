import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common'; // 导入 CommonModule

@Component({
  selector: 'app-headers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './headers.component.html',
  styleUrl: '../app.component.css'
})
export class HeadersComponent implements OnInit{

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
    console.log('Clean URL:', cleanUrl); 
    if (cleanUrl === '/') {
      this.activeStep = 1;
    } else if (cleanUrl.startsWith('/confirm-pay')) {
      this.activeStep = 2;
    } else {
      this.activeStep = 3;
    }
  }
}
