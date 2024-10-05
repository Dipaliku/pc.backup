import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/compoent/home/home.component';
import { NewsComponent } from './shared/compoent/news/news.component';
import { PostComponent } from './shared/compoent/post/post.component';

const routes: Routes = [
  {
    path:'', //http://localhost:4200/
    component:HomeComponent
  },
  {
    path:'home', //http://localhost:4200/
    component:HomeComponent
  },
  {
    path:'news', //http://localhost:4200/
    component:NewsComponent
  },
  {
    path:'post', //http://localhost:4200/
    component:PostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
