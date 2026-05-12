import { Routes } from '@angular/router';
import { AddJobComponent } from './components/add-job/add-job';
import { JobListComponent } from './components/job-list/job-list';
import { LoginComponent } from './components/login/login';
import { authGuard } from './auth-guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },

  { path: '', component: JobListComponent, canActivate: [authGuard] },
  { path: 'add', component: AddJobComponent, canActivate: [authGuard] },

  { path: '**', redirectTo: '' }
];