import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SubmitButtonComponent} from "./components/submit-button/submit-button.component";
import {RechargeDetailsComponent} from "./components/recharge-details/recharge-details.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SubmitButtonComponent, RechargeDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Recharge';
}
