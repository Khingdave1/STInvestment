import { Component, AfterViewInit, Renderer2, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {

  @ViewChild('accountMenu') accountMenu: ElementRef;
  @ViewChild('auth') auth: ElementRef;

  hamClick: any;
  authModal: any;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    // Click Outside to close element
    this.renderer.listen('window', 'click', (e: Event) => {
      let x = !this.accountMenu.nativeElement.contains(e.target)
      let y = !this.auth.nativeElement.contains(e.target)
      if (x && y) {
        this.authModal = false;
      }
    });
  }


  // Toggle Menu
  openMenu() {
    this.hamClick = !this.hamClick
  }

  // Open Auth Modal
  openAuthModal() {
    this.authModal = !this.authModal
  }

}
