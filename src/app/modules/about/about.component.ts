import { Component, AfterViewInit, Renderer2, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {

  @ViewChild('certBtn') certBtn: ElementRef;
  @ViewChild('cert') cert: ElementRef;

  certModal: any;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    // Click Outside to close element
    // this.renderer.listen('window', 'click', (e: Event) => {
    //   let x = !this.certBtn.nativeElement.contains(e.target)
    //   let y = !this.cert.nativeElement.contains(e.target)
    //   if (x && y) {
    //     this.certModal = false;
    //   }
    // });
  }

  // Open Cert Modal
  openCertModal() {
    this.certModal = !this.certModal
  }

}
