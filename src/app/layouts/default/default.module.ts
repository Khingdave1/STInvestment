import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/app/modules/header/header.component';
import { AboutComponent } from 'src/app/modules/about/about.component';
import { ServicesComponent } from 'src/app/modules/services/services.component';
import { TestimonialComponent } from 'src/app/modules/testimonial/testimonial.component';
import { ContactComponent } from 'src/app/modules/contact/contact.component';
import { BtcchartComponent } from 'src/app/modules/btcchart/btcchart.component';
import { FooterComponent } from 'src/app/modules/footer/footer.component';
import { SignupComponent } from 'src/app/modules/signup/signup.component';



@NgModule({
  declarations: [
    HeaderComponent,
    AboutComponent,
    ServicesComponent,
    TestimonialComponent,
    ContactComponent,
    BtcchartComponent,
    FooterComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RouterModule,
    HeaderComponent,
    AboutComponent,
    ServicesComponent,
    TestimonialComponent,
    ContactComponent,
    BtcchartComponent,
    FooterComponent,
    SignupComponent
  ]
})
export class DefaultModule { }
