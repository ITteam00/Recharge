import { Routes } from '@angular/router';
import { RechargeFormComponent } from './recharge-form/recharge-form.component';
import { ConfirmPayComponent } from './confirm-pay/confirm-pay.component';

export const routes: Routes = [
    { path: 'recharge', component: RechargeFormComponent },
    { path: 'confirm-pay', component: ConfirmPayComponent },
    { path: '', redirectTo: '/recharge', pathMatch: 'full' }
];
