import { Component, Input, OnInit } from '@angular/core';
import { Ifairs } from 'src/app/models/fair.interface';

@Component({
  selector: 'app-fairdetails',
  templateUrl: './fairdetails.component.html',
  styleUrls: ['./fairdetails.component.scss']
})
export class FairdetailsComponent implements OnInit {
  @Input()selectedfairs !:Ifairs;
  constructor() { }

  ngOnInit(): void {
  }

}
