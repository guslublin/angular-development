// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { AboutComponent } from './pages/about/about.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: 'users' },
  { path: 'user/:id', component: UserDetailComponent }
];
