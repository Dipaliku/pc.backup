import { Component, Input, OnInit } from '@angular/core';
import { Ipassenger } from 'src/app/shared/models/passenger';
import { PassengerService } from '../../passenger.service';

@Component({
  selector: 'app-passenger-card',
  templateUrl: './passenger-card.component.html',
  styleUrls: ['./passenger-card.component.scss']
})
export class PassengerCardComponent implements OnInit {
 @Input() passobj !:Ipassenger
 isineditmode :boolean=false;
  private _passengerservice: any;
  constructor(
    private_passengerservice:PassengerService
  ) { }

  ngOnInit(): void {
  }
  onupdate(updatename:HTMLInputElement){
    this.passobj={...this.passobj,fullname:updatename.value};
    console.log(`on update work!!!`);
    this._passengerservice.updatepassinfo(this.passobj)
  }

  test(){
    console.log(`test on work!!!`)
  }
}
function getupdatepassinfo(passobj: Ipassenger) {
  throw new Error('Function not implemented.');
}

