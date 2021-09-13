import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './layouts/dashboard/dashboard.module';
import { DefaultComponent } from './layouts/default/default.component';
import { DefaultModule } from './layouts/default/default.module';


@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DefaultModule,
    DashboardModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
