import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Profile } from 'src/app/interfaces/profile';
import { ProfileService } from 'src/app/services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sendfund',
  templateUrl: './sendfund.component.html',
  styleUrls: ['./sendfund.component.css']
})
export class SendfundComponent implements AfterViewInit {

  @ViewChild('investBtn') investBtn: ElementRef;
  @ViewChild('investBtn2') investBtn2: ElementRef;
  @ViewChild('investBtn3') investBtn3: ElementRef;
  @ViewChild('deposit') deposit: ElementRef;

  depositModal: any;
  planPreview: any;
  planPreview2: any;
  planPreview3: any;
  option: string = "Null";
  optionId: string = "Null";
  BtcId: string = "1FqD5tgXJjMaNhP1ECoYTkqvpnYK35jmzA";
  EtherumId: string = "0x9286a3cd89b7a8a8703a1bcda027b0e3fd01a867";
  usdtId: string = "0x9286a3cd89b7a8a8703a1bcda027b0e3fd01a867";
  amount: any;
  paymentMethod: any;
  userId: any;
  users: any;
  user: any;
  copyText: any;
  tooltip: any;

  constructor(private renderer: Renderer2, private profileService: ProfileService, private router: Router) { }

  ngAfterViewInit(): void {

    // Get single User Informations
    this.userId = JSON.parse(localStorage.getItem('id') || '{}')
    this.users = this.profileService.getSingleUser(this.userId).subscribe((res: any) => {
      res.forEach((r: any) => {
        let item = r.payload.doc.data() as Profile
        this.user = item
      });
    })

    // Click Outside to close element
    this.renderer.listen('window', 'click', (e: Event) => {
      let x = !this.investBtn.nativeElement.contains(e.target)
      let x2 = !this.investBtn2.nativeElement.contains(e.target)
      let x3 = !this.investBtn3.nativeElement.contains(e.target)
      let y = !this.deposit.nativeElement.contains(e.target)
      if (x && y && x2 && x3) {
        this.depositModal = false;
      }
    });
  }

  // Submit form
  openDepositModal() {
    
     // Open Deposit Modal
    this.depositModal = !this.depositModal
    
    this.amount = document.getElementById("amount");
    this.paymentMethod = document.getElementById("paymentMethod");

    if (this.paymentMethod.value === 'Btc') {
      this.option = "Btc"
      this.optionId = this.BtcId
    } else if (this.paymentMethod.value === 'Etherum') {
      this.option = "Etherum"
      this.optionId = this.EtherumId
    } else if (this.paymentMethod.value === 'Usdt') {
      this.option = "Usdt"
      this.optionId = this.usdtId
    }

  }

  // Open Plan Preview
  openPlanPreview() {
    this.planPreview = !this.planPreview
  }
  openPlanPreview2() {
    this.planPreview2 = !this.planPreview2
  }
  openPlanPreview3() {
    this.planPreview3 = !this.planPreview3
  }

  // Copy text to clipboard
  myFunction() {
    /* Get the text field */
    this.copyText = document.getElementsByClassName("myInput");

    Array.prototype.forEach.call(this.copyText, i => {
      /* Select the text field */
      i.select();
      // console.log(i.value)
      i.setSelectionRange(0, 99999); /* For mobile devices */

      /* Copy the text inside the text field */
      navigator.clipboard.writeText(i.value);

      this.tooltip = "Copied!";

    });
  }

  // On mouse over
  outFunc() {
    this.tooltip = "Copy to clipboard";
  }

  // Deposit
  depositBtn() {
    // Navigate to Dashboard
    this.router.navigate(['dashboard'])
  }

}

