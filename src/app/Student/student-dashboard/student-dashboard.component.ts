import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-student-dashboard',
  imports: [CommonModule,RouterModule],
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
