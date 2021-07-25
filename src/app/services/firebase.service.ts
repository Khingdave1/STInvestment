import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { ProfileService } from './profile.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  isLogggedIn = false
  imageUrl = "https://res.cloudinary.com/djnqxvljr/image/upload/v1620660773/perlfood/assets/svg/bxs-user-circle_lpxmj4.svg"

  // currentUser: string;
  private currentUserSubject: BehaviorSubject<any>
  public currentUser: Observable<any>

  constructor(public firebaseAuth: AngularFireAuth, private profileService: ProfileService) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('id') || '{}'))
    this.currentUser = this.currentUserSubject.asObservable()
  }

  public get currenUserValue() {
    return this.currentUserSubject.value
  }

  // Sign In
  async signinUser(payload: any) {
    await this.firebaseAuth.signInWithEmailAndPassword(payload.emailAddress, payload.password)
      .then(res => {
        this.isLogggedIn = true

        localStorage.setItem('token', JSON.stringify(res.user?.refreshToken))

        localStorage.setItem('id', JSON.stringify(res.user?.uid))

        this.currentUserSubject.next(res.user)
      })

  }

  // Sign Up
  async createUser(email: string, password: string, payload: any) {
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        let data = {
          emailAddress: payload.emailAddress.toLowerCase(),
          fullName: payload.fullName,
          userName: payload.userName,
          telNumber: payload.telNumber,
          imageUrl: this.imageUrl,
          uid: res.user?.uid
        }

        /** sends verification email **/
        res.user?.sendEmailVerification();

        this.profileService.addUser(data)

        this.isLogggedIn = true

        localStorage.setItem('token', JSON.stringify(res.user?.refreshToken))

        localStorage.setItem('id', JSON.stringify(res.user?.uid))

        this.currentUserSubject.next(res.user)


      })
  }

  // Email Verification

  // Reset Password
  resetPassword(email: string): Promise<any> {
    return this.firebaseAuth.sendPasswordResetEmail(email)
      .then(() => {
        console.log('Auth Service: reset password success');
        // this.router.navigate(['/amount']);
      })
      .catch(error => {
        console.log('Auth Service: reset password error...');
        console.log(error.code);
        console.log(error)
        if (error.code)
          return error;
      });
  }

  // Sign Out
  signout() {
    this.firebaseAuth.signOut()
    // Clear from Local Storage
    localStorage.removeItem('id')
    localStorage.removeItem('token')

    this.currentUserSubject.next(null)

  }
}
