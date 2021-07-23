import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  @Output("parentData") parentData: EventEmitter<any> = new EventEmitter();
  // hide: boolean = true;
  loading: boolean = false;
  returnUrl = '';
  error = '';
  isSignedin: boolean = false;
  // message = '';
  // email: string = '';
  // password: string = '';

  constructor(private firebaseService: FirebaseService, private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl' || '/']

    if (localStorage.getItem('id') !== null) {
      this.isSignedin = true
    } else {
      this.isSignedin = false
    }
  }

  // Form initialization and validation
  signinForm: FormGroup = this.formBuilder.group({
    email: ['', { validators: [Validators.required, Validators.email], updateOn: "change" }],
    password: ['', { validators: [Validators.required], updateOn: "change" }]
  })

  async signin() {
    if (this.signinForm.invalid) {
      return
    }

    let payload = {
      emailAddress: this.signinForm.value.email,
      password: this.signinForm.value.password
    }

    await this.firebaseService.signinUser(payload)
      .then(res => {
        this.loading = true
      })

    if (this.firebaseService.isLogggedIn === true) {
      this.isSignedin = true
      // Navigate to Dashboard
      this.router.navigate(['dashboard'])
    }
  }

  // Show Signup Form
  openSignupModal() {
    this.parentData.emit();
  }

}
