import { NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-phone-input',
  standalone: true,
  imports: [NgIf,FormsModule],
  templateUrl: './phone-input.component.html',
  styleUrl: './phone-input.component.css'
})

export class PhoneInputComponent {
  phoneNumber: string = '';
  isValid: boolean = true;

  validatePhoneNumber() {
    const phoneRegex = /^\d{11}$/;
    this.isValid = phoneRegex.test(this.phoneNumber);
  }
}
