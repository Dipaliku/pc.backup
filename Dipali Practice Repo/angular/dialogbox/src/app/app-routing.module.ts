import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostdashboardComponent } from './shared/compoent/postdashboard/postdashboard.component';
import { PostformComponent } from './shared/compoent/postform/postform.component';
import { PostComponent } from './shared/compoent/post/post.component';
import { PagenotfoundComponent } from './shared/compoent/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path:'',
    component : PostdashboardComponent
  },
  {
    path:'posts',
    component : PostdashboardComponent
  },
  {
    path:'posts/addpost',
    component : PostformComponent
  },
  {
    path:'posts/postid',
    component : PostComponent
  },
  {
    path:'posts/postid/edit',
    component : PostformComponent
  },
  {
    path:'posts/addpost',
    component : PostformComponent
  },
  // {
  //   path:'page-not-found',
  //   component : PagenotfoundComponent
  // },
  // {
  //   path:'**',
  //   redirectTo : 'page -not-found'
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
