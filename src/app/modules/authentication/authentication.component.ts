import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  signinModal: any;
  signupModal: any;

  constructor() { }

  ngOnInit(): void {
    // Get DOM element
    this.signinModal = document.getElementById('signinModal')
    this.signupModal = document.getElementById('signupModal')
    // Set default value
    this.signinModal.style.display = "block"
    this.signupModal.style.display = "none"
  }

  // Opem Signup Modal
  openSigninModal() {
    this.signinModal.style.display = "block"
    this.signupModal.style.display = "none"
  }
  // Opem Signup Modal
  openSignupModal() {
    this.signupModal.style.display = "block"
    this.signinModal.style.display = "none"
  }

}
