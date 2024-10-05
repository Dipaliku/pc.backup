import { Component, OnInit } from '@angular/core';
import { Ipassenger } from 'src/app/shared/models/passenger';
import { PassengerService } from '../../passenger.service';

@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss'],
  providers :[PassengerService]
})
export class PassengerDashboardComponent implements OnInit {
 passarr !:Array<Ipassenger>
 totalcount!:number;
 checkincount!:number;
  constructor(
    private _passengerservice:PassengerService
  ) { }

  ngOnInit(): void {
    this.passarr=this._passengerservice.Fetchallpassengers()

    this.totalcount=this.passarr.length;
    this.checkincount=this.passarr.filter(pass=>pass.checkedIn).length

  }

}
