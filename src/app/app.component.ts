import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StartRechargeButtonComponent } from "./start-recharge-button/start-recharge-button.component";
import { HeadersComponent } from "./headers/headers.component";
import { FormComponent } from "./form/form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StartRechargeButtonComponent, HeadersComponent, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Recharge';
}
