import { Component, OnInit, Renderer2, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
  @ViewChild('sideNav') sideNav: ElementRef;
  @ViewChild('menuBtn') menuBtn: ElementRef;

  hamClick: any;

  constructor(private firebaseService: FirebaseService, private profileService: ProfileService, private renderer: Renderer2, private router: Router) { }

  ngAfterViewInit(): void {
    // Click Outside to close element
    this.renderer.listen('window', 'click', (e: Event) => {
      let x = !this.sideNav.nativeElement.contains(e.target)
      let y = !this.menuBtn.nativeElement.contains(e.target)
      if (x && y) {
        this.hamClick = false;
      }
    });
  }

  // Open Menu
  openMenu() {
    this.hamClick = !this.hamClick
  }

  // Log the user out
  logOut() {
    this.firebaseService.signout()
    // Return to Home page
    this.router.navigate([''])
  }

}
