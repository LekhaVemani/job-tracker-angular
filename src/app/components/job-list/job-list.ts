import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './job-list.html',
  styleUrls: ['./job-list.css']
})
export class JobListComponent {

  jobs: any[] = [];
  filteredJobs: any[] = [];
  selectedFilter: string = '';

  ngOnInit() {
    this.jobs = JSON.parse(localStorage.getItem('jobs') || '[]');
    this.filteredJobs = this.jobs;
  }

  deleteJob(index: number) {
    this.jobs.splice(index, 1);
    localStorage.setItem('jobs', JSON.stringify(this.jobs));
    this.filterJobs();
  }

  filterJobs() {
    if (this.selectedFilter === '') {
      this.filteredJobs = this.jobs;
    } else {
      this.filteredJobs = this.jobs.filter(job => job.status === this.selectedFilter);
    }
  }
}