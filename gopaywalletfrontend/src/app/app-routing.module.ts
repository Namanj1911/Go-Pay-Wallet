import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddamountComponent } from './addamount/addamount.component';
import { ConvertcurrencyComponent } from './convertcurrency/convertcurrency.component';
import { LoginComponent } from './login/login.component';
import { MaindashboardComponent } from './maindashboard/maindashboard.component';
import { MakepaymentComponent } from './makepayment/makepayment.component';
import { RegisterComponent } from './register/register.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { ViewconversionsComponent } from './viewconversions/viewconversions.component';
import { ViewtransactionsComponent } from './viewtransactions/viewtransactions.component';

const routes: Routes = [
  {
    path: 'maindashboard',
    component: MaindashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'userdashboard',
    component: UserdashboardComponent
  },
  {
    path: 'makepayment',
    component: MakepaymentComponent
  },
  {
    path: 'addamount',
    component: AddamountComponent
  },
  {
    path: 'convertcurrency',
    component: ConvertcurrencyComponent
  },
  {
    path: 'viewtransactions',
    component: ViewtransactionsComponent
  },
  {
    path: 'viewconversions',
    component: ViewconversionsComponent
  },
  {
    path: '',
    redirectTo: '/maindashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
