import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FairdashboardComponent } from './shared/component/fairdashboard/fairdashboard.component';
import { FaircardsComponent } from './shared/component/faircards/faircards.component';
import { FairdetailsComponent } from './shared/component/fairdetails/fairdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    FairdashboardComponent,
    FaircardsComponent,
    FairdetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
