import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from '../signin/signin.component';
import { SignupComponent } from '../signup/signup.component';
import { AuthenticationComponent } from '../authentication/authentication.component';



@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    AuthenticationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SigninComponent,
    SignupComponent,
    AuthenticationComponent
  ]
})
export class HeaderModule { }
