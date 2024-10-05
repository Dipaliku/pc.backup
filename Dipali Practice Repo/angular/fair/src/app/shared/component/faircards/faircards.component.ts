import { Component, Input, OnInit } from '@angular/core';
import { Ifairs } from 'src/app/models/fair.interface';

@Component({
  selector: 'app-faircards',
  templateUrl: './faircards.component.html',
  styleUrls: ['./faircards.component.scss']
})
export class FaircardsComponent implements OnInit {
  @Input() selectedfairs !:Ifairs;
  constructor() { }

  ngOnInit(): void {
  }

}
