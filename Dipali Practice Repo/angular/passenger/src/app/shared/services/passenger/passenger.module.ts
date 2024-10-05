import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerDashboardComponent } from './passenger-dashboard/passenger-dashboard.component';
import { PassengerCardComponent } from './passenger-card/passenger-card.component';
import { PassengerCountComponent } from './passenger-count/passenger-count.component';
import { PassengerService } from '../passenger.service';



@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCardComponent,
    PassengerCountComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
        PassengerDashboardComponent
  ],
  providers:[
     PassengerService
  ]
})
export class PassengerModule { }
