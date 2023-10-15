import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { HomeComponent } from './home/home.component';
import { TaskListComponent } from './task-list/task-list/task-list.component';
import { PostFormComponent } from './posts/post-form/post-form.component';
import { ItemsListComponent } from './items2/items-list/items-list.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { D3Component } from './d3/d3.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'public', component: PublicComponent },
  { path: 'tasklist', component: TaskListComponent },
  { path: 'posts', component: PostFormComponent },
  {path: 'items', component: ItemsListComponent },
  {path: 'create-account', component: CreateAccountComponent },
  {path: 'd3', component: D3Component }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
