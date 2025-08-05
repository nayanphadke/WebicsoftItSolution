import { Component } from '@angular/core';
import { UserServiceService } from '../../Services/user-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-student-leave',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './student-leave.component.html',
  styleUrl: './student-leave.component.css'
})
export class StudentLeaveComponent {
  employeeId: string = '';
  studentfirstName: string = '';

  leave = {
    fromDate: '',
    toDate: '',
    reason: '',
    employeeId: ''
  };

  constructor(private leaveService: UserServiceService) {}

  ngOnInit() {
    const user = localStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      this.employeeId = parsedUser.regId || '0';
      this.studentfirstName = parsedUser.firstName || '';
      this.leave.employeeId = String(parsedUser.regId || '0');

    }

    // ❌ REMOVE THIS — you were submitting immediately
    // this.applyLeave();
  }

  applyLeave() {
    console.log('Sending leave request:', this.leave);
    this.leaveService.applyLeave(this.leave).subscribe({
      
      next: () => {
        alert('Leave request submitted ✅');
        this.leave = {
          fromDate: '',
          toDate: '',
          reason: '',
          employeeId: this.employeeId  // ✅ preserve emp ID after reset
        };
      },
      error: () => {
        alert('Failed to submit leave request ❌');
      }
    });
    debugger
    console.log('Sending leave request:', this.leave);
console.log('Type of employeeId:', typeof this.leave.employeeId);
  }
}
