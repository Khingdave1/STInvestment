import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receivefund',
  templateUrl: './receivefund.component.html',
  styleUrls: ['./receivefund.component.css']
})
export class ReceivefundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    // Deposit
    withdrawlbtn() {
      // Reload page
      window.location.reload()
    }
}
