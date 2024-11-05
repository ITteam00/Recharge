import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component'; // 确保路径正确
import { ConfirmPayComponent } from './confirm-pay/confirm-pay.component'; // 确保路径正确

export const routes: Routes = [
    { path: '', component: FormComponent },
    { path: 'confirm-pay', component: ConfirmPayComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }