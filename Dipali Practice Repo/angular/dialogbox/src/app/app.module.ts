import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/compoent/navbar/navbar.component';
import { PostdashboardComponent } from './shared/compoent/postdashboard/postdashboard.component';
import { PostCardComponent } from './shared/compoent/post-card/post-card.component';
import { PostformComponent } from './shared/compoent/postform/postform.component';
import { PostComponent } from './shared/compoent/post/post.component';
import { PagenotfoundComponent } from './shared/compoent/pagenotfound/pagenotfound.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostdashboardComponent,
    PostCardComponent,
    PostformComponent,
    PostComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
