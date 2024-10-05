import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/compoent/navbar/navbar.component';
import { NewsComponent } from './shared/compoent/news/news.component';
import { HomeComponent } from './shared/compoent/home/home.component';
import { PostComponent } from './shared/compoent/post/post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatListModule} from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PostCardComponent } from './shared/compoent/post-card/post-card.component';
import { NewsCardComponent } from './shared/compoent/news-card/news-card.component';
import {HttpClientModule} from '@angular/common/http';
 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewsComponent,
    HomeComponent,
    PostComponent,
    PostCardComponent,
    NewsCardComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatPaginatorModule,
    HttpClientModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
