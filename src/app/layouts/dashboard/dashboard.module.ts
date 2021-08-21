import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverviewComponent } from 'src/app/modules/dashboard/overview/overview.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AccountComponent } from 'src/app/modules/dashboard/account/account.component';
import { SendfundComponent } from 'src/app/modules/dashboard/sendfund/sendfund.component';
import { ReceivefundComponent } from 'src/app/modules/dashboard/receivefund/receivefund.component';



@NgModule({
  declarations: [
    DashboardComponent,
    OverviewComponent,
    AccountComponent,
    SendfundComponent,
    ReceivefundComponent
  ],
  
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class DashboardModule { }
