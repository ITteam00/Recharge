import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneInputComponent } from '../phone-input.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,PhoneInputComponent
  ],
  exports: [PhoneInputComponent]

})
export class PhoneValidatorModule { }
