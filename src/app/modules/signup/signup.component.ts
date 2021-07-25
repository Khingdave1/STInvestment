import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @Output("parentData") parentData: EventEmitter<any> = new EventEmitter();

  isSignedin: boolean = false;
  emailAddress: string = "";
  fullName: string = "";
  userName: string = "";
  telNumber: number;
  imageUrl: string = "";
  loading: boolean = false;
  errorMessage: string = "";

  constructor(private firebaseService: FirebaseService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('id') !== null) {
      this.isSignedin = true
    } else {
      this.isSignedin = false
    }
  }

  // Form initialization and validation
  signupForm: FormGroup = this.formBuilder.group({
    fullName: ['', { validators: [Validators.required], updateOn: "change" }],
    userName: ['', { validators: [Validators.required], updateOn: "change" }],
    email: ['', { validators: [Validators.required, Validators.email], updateOn: "change" }],
    number: ['', { validators: [Validators.required], updateOn: "change" }],
    password: ['', { validators: [Validators.required, Validators.minLength(8)], updateOn: "change" }],
    confirmPassword: ['', { validators: [Validators.required, Validators.minLength(8)], updateOn: "change" }]
  })

  async signup() {
    // If form is invalid don't submit
    if (this.signupForm.invalid) {
      return
    }

    // Loading
    this.loading = true

    let payload = {
      emailAddress: this.signupForm.value.email,
      fullName: this.signupForm.value.fullName,
      userName: this.signupForm.value.userName,
      telNumber: this.signupForm.value.number,
      password: this.signupForm.value.password
    }

    await this.firebaseService.createUser(payload.emailAddress, payload.password, payload)
      .then(res => {

      }).catch(err => {
        this.errorMessage = err.message
        this.loading = false
      })

    if (this.firebaseService.isLogggedIn === true) {
      this.isSignedin = true
      // Navigate to Dashboard
      this.router.navigate(['dashboard'])
    }
  }

  // Show Signin Form
  openSigninModal() {
    this.parentData.emit();
  }

}
