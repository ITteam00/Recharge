import {RouterModule, Routes} from '@angular/router';
import {RechargeConfirmationComponent} from "./components/recharge-confirmation/recharge-confirmation.component";
import {NgModule} from "@angular/core";
import {AllRechargeInfoComponent} from "./components/all-recharge-info/all-recharge-info.component";

export const routes: Routes = [
  { path: '', component: AllRechargeInfoComponent },
  { path: 'confirmation', component: RechargeConfirmationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
