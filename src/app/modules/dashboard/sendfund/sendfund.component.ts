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
  BtcId: string = "bc1qas59m8yzlkn3xjtn4vpt0d6wx0xe6fc84h5zq2";
  EtherumId: string = "0x39B439Acc0b1eEDC51F4412aEc84bD8EC4A53854";
  usdtId: string = "TLHnqiY76WHwb4U5EWwoQYhRKPVMqQmKS7";
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
    this.paymentMethod = document.getElementsByClassName("paymentMethod");

    Array.prototype.forEach.call(this.paymentMethod, i => {
      // this.planPreview = !this.planPreview
      if (i.value === 'Btc') {
        this.option = "Btc"
        this.optionId = this.BtcId
      } else if (i.value === 'Etherum') {
        this.option = "Etherum"
        this.optionId = this.EtherumId
      } else if (i.value === 'Usdt') {
        this.option = "Usdt"
        this.optionId = this.usdtId
      }
    });

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
    this.copyText = document.getElementById("myInput");

    /* Select the text field */
    this.copyText.select();
    this.copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(this.copyText.value);

    this.tooltip = document.getElementById("myTooltip");
    this.tooltip.innerHTML = "Copied!";
  }

  // On mouse over
  outFunc() {
    this.tooltip = document.getElementById("myTooltip");
    this.tooltip.innerHTML = "Copy to clipboard";
  }

  // Deposit
  depositBtn() {
    // Navigate to Dashboard
    this.router.navigate(['dashboard'])
  }

}
