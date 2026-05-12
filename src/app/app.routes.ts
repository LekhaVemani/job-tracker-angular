import { Routes } from '@angular/router';
import { AddJobComponent } from './components/add-job/add-job';
import { JobListComponent } from './components/job-list/job-list';

export const routes: Routes = [
  { path: '', component: JobListComponent },
  { path: 'add', component: AddJobComponent }
];