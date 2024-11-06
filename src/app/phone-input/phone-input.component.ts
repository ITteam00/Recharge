import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-phone-input',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './phone-input.component.html',
  styleUrl: './phone-input.component.css'
})
export class PhoneInputComponent {
  phoneForm: FormGroup;
  @Output() phoneNumberChange = new EventEmitter<[string,boolean]>();

  constructor(private fb: FormBuilder) {
    this.phoneForm = this.fb.group({
      phone: ['', [Validators.required, Validators.pattern('^1[0-9]{10}$')]]
    });
  }

  onPhoneNumberChange() {
      console.log(this.phoneForm.value);
      this.phoneNumberChange.emit([this.phoneForm.value.phone,this.phoneForm.valid])
  }

  get phone() {
    return this.phoneForm.get('phone');
  }  
}
