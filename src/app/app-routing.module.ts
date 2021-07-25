import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { DefaultComponent } from './layouts/default/default.component';
import { AccountComponent } from './modules/dashboard/account/account.component';
import { OverviewComponent } from './modules/dashboard/overview/overview.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', component: DefaultComponent, redirectTo: '', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: OverviewComponent },
      { path: 'account', component: AccountComponent }
    ]
  },
  { path: '**', component: DefaultComponent },                       // catch-all in case no other path matched
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
