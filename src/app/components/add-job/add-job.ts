import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-job',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-job.html',
  styleUrls: ['./add-job.css']
})
export class AddJobComponent {

  job = {
    company: '',
    role: '',
    status: ''
  };

  addJob() {
    let jobs = JSON.parse(localStorage.getItem('jobs') || '[]');
    jobs.push(this.job);
    localStorage.setItem('jobs', JSON.stringify(jobs));

    alert('Job Added!');

    this.job = { company: '', role: '', status: '' };
  }
}