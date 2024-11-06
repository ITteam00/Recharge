import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RechargeHeaderComponent } from "./recharge-header/recharge-header.component";
import { RechargeFormComponent } from "./recharge-form/recharge-form.component";
import { PhoneInputComponent } from "./phone-input/phone-input.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RechargeHeaderComponent, RechargeFormComponent, PhoneInputComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Recharge';
}
