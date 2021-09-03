import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sendfund',
  templateUrl: './sendfund.component.html',
  styleUrls: ['./sendfund.component.css']
})
export class SendfundComponent implements AfterViewInit {

  @ViewChild('investBtn') investBtn: ElementRef;
  @ViewChild('deposit') deposit: ElementRef;

  depositModal: any;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    // Click Outside to close element
    this.renderer.listen('window', 'click', (e: Event) => {
      let x = !this.investBtn.nativeElement.contains(e.target)
      let y = !this.deposit.nativeElement.contains(e.target)
      if (x && y) {
        this.depositModal = false;
      }
    });
  }


  // Open Deposit Modal
  openDepositModal() {
    this.depositModal = !this.depositModal
    console.log("Yes!!!")
  }

}

