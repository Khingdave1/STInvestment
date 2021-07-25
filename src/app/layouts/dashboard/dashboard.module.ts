import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from 'src/app/modules/dashboard/overview/overview.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AccountComponent } from 'src/app/modules/dashboard/account/account.component';



@NgModule({
  declarations: [
    DashboardComponent,
    OverviewComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    SharedModule
  ]
})
export class DashboardModule { }
