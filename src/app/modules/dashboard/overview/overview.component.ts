import { Component, AfterViewInit } from '@angular/core';
import { Profile } from 'src/app/interfaces/profile';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements AfterViewInit {

  userId: any;
  users: any;
  user: any;
  currentBal: number = 0

  constructor(private profileService: ProfileService) { }

  ngAfterViewInit(): void {

    // Get single User Informations
    this.userId = JSON.parse(localStorage.getItem('id') || '{}')
    this.users = this.profileService.getSingleUser(this.userId).subscribe((res: any) => {
      res.forEach((r: any) => {
        let item = r.payload.doc.data() as Profile
        this.user = item

        // Calculate current balance
        this.currentBal = this.user.totalDepo - this.user.totalWith
      });
    })


  }

}
