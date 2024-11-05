import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoneyCalculateComponent } from './money-calculate/money-calculate.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';


export const routes: Routes = [
  { path: '', component: MoneyCalculateComponent },
  { path: 'confirmation', component: ConfirmationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }