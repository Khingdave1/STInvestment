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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from 'src/app/modules/header/header.module';



@NgModule({
  declarations: [
    HeaderComponent,
    AboutComponent,
    ServicesComponent,
    TestimonialComponent,
    ContactComponent,
    BtcchartComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderModule
  ],
  exports: [
    RouterModule,
    HeaderComponent,
    AboutComponent,
    ServicesComponent,
    TestimonialComponent,
    ContactComponent,
    BtcchartComponent,
    FooterComponent
  ]
})
export class DefaultModule { }
