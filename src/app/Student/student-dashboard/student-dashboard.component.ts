import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-dashboard',
  imports: [CommonModule],
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.css'
})
export class StudentDashboardComponent implements OnInit {
  student: any;

  ngOnInit() {
    const userData = localStorage.getItem('user');
    if (userData) {
      this.student = JSON.parse(userData);
    }
  }
}
