import { DetailsComponent } from './components/https/details/details.component';
import { PostsComponent } from './components/https/posts/posts.component';
import { UsersComponent } from './components/https/users/users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'details/:id', component: DetailsComponent},
  { path: 'posts', component: PostsComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
