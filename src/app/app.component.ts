import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadersComponent } from "./headers/headers.component";
import { FormComponent } from "./form/form.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HeadersComponent, 
    FormComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Recharge';
}
