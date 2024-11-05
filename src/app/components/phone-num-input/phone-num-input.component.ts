import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-phone-num-input',
  standalone: true,
  imports: [
    FormsModule,
    NgClass
  ],
  templateUrl: './phone-num-input.component.html',
  styleUrl: './phone-num-input.component.css'
})
export class PhoneNumInputComponent {
  @Input() phoneNumber: string = '';
  @Input() location: string = 'Beijing';
  @Output() phoneNumberChange = new EventEmitter<string>();

  isValidPhoneNumber: boolean = true;

  validatePhoneNumber() {
    const phonePattern = /^1\d{10}$/; //
    this.isValidPhoneNumber = phonePattern.test(this.phoneNumber);
    if (this.isValidPhoneNumber) {
      this.phoneNumberChange.emit(this.phoneNumber);
    } else {
      this.phoneNumberChange.emit('');
    }
  }
}
