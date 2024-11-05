import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RechargeHeadersComponent } from "./recharge-headers/recharge-headers.component";
import { RechargeFormComponent } from "./recharge-form/recharge-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RechargeHeadersComponent, RechargeFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Recharge';
}
