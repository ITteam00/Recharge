import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoneyCalculateComponent } from './money-calculate/money-calculate.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { RechargeFormComponent } from './recharge-form/recharge-form.component';


export const routes: Routes = [
  { path: '', component: RechargeFormComponent},
  { path: 'confirmation', component: ConfirmationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }