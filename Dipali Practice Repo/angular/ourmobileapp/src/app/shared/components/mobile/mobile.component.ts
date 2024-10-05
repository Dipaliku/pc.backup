import { Component, OnInit } from '@angular/core';
import { mobileproducts } from 'src/app/const/mobiledata';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {
  mobilearr :Array<imobile>=mobileproducts

  constructor() { }

  ngOnInit(): void {
  }

}
