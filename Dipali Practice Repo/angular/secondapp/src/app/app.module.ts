import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { studentcomponent } from './student/student.component';
import { PostCardsComponent } from './shared/component/post-cards/post-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    studentcomponent,
    PostCardsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
