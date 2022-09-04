import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  loading: boolean = false;
  errorMessage: string = "";
  sectId: string = "forgot-password";
  userEmail: string = ''

  constructor(private firebaseService: FirebaseService, private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  // Form initialization and validation
  forgotPasswordForm: FormGroup = this.formBuilder.group({
    email: ['', { validators: [Validators.required, Validators.email], updateOn: "change" }],
  })

  // Forget password
  async forgetPassword() {
    // Start loading
    this.loading = true

    await this.firebaseService.resetPassword(this.forgotPasswordForm.value.email).then(res => {
      this.sectId = 'email-sent'
      this.userEmail = this.forgotPasswordForm.value.email
      console.log(`Link has been sent to ${this.forgotPasswordForm.value.email}`);
    }).catch(err => {
      this.loading = false
      console.log(err.message);
      this.errorMessage = err.message
    })
  }

}
