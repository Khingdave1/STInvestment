import { Component, OnInit, Renderer2, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
  @ViewChild('sideNav') sideNav: ElementRef;
  @ViewChild('menuBtn') menuBtn: ElementRef;

  hamClick: any;

  constructor(private renderer: Renderer2) { }

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

  openMenu() {
    this.hamClick = !this.hamClick
  }

}
