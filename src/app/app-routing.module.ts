import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { DefaultComponent } from './layouts/default/default.component';
import { AccountComponent } from './modules/dashboard/account/account.component';
import { OverviewComponent } from './modules/dashboard/overview/overview.component';
import { ReceivefundComponent } from './modules/dashboard/receivefund/receivefund.component';
import { SendfundComponent } from './modules/dashboard/sendfund/sendfund.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', component: DefaultComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {path: '', component: OverviewComponent },
      {path: 'account', component: AccountComponent, canActivate: [AuthGuard] },
      {path: 'send', component: SendfundComponent, canActivate:[AuthGuard]},
      {path: 'receive', component: ReceivefundComponent, canActivate:[AuthGuard]}
    ]
  },
  // { path: '**', component: DefaultComponent },                       // catch-all in case no other path matched
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
