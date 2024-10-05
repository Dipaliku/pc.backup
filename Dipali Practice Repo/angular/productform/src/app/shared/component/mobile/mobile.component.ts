import { Component, OnInit } from '@angular/core';
import { Imobile } from '../../models/mobile.interface';
import { mobileproducts } from '../../const/mobiledata';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {
  mobileArr :Array<Imobile> = mobileproducts
  constructor() { }

  ngOnInit(): void {
  }

}
