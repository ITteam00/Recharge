import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-start-recharge-button',
  standalone: true,
  imports: [],
  templateUrl: './start-recharge-button.component.html',
  styleUrl: '../app.component.css'
})
export class StartRechargeButtonComponent {
  @Output() startRecharge = new EventEmitter<void>();

  onStartRecharge() {
    this.startRecharge.emit();
  }

}
