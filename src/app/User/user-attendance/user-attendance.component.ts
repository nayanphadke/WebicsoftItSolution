import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserServiceService } from '../../Services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-attendance',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-attendance.component.html',
  styleUrl: './user-attendance.component.css'
})

export class UserAttendanceComponent {
  studentId: string = '';
studentfirstName: string = '';
  studentlastName: string = '';

   constructor(private attendanceService: UserServiceService) { }

  ngOnInit() {
    const user = localStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      this.studentId = parsedUser.regId || '';
      this.studentfirstName = parsedUser.firstName || '';
      this.studentlastName = parsedUser.lastName || '';

    }
  }





  empId: string = 'EMP001';
  attendanceType: any = "";
  isDaily: boolean = true;

  selectedDate: string = '';
  dailyAttendanceType: string = 'General';

  startDate: string = '';
  endDate: string = '';
  weekDates: string[] = [];
  weeklyStatus: { [key: string]: string } = {};
  weeklyType: { [key: string]: string } = {};
  status: string = 'Present'; // Default status for daily attendance
  

  onTypeChange() {
    this.isDaily = this.attendanceType === 'Daily';
    this.selectedDate = '';
    this.startDate = '';
    this.endDate = '';
    this.weekDates = [];
    this.weeklyStatus = {};
    this.weeklyType = {};
  }

  calculateEndDate() {
    if (this.startDate) {
      const start = new Date(this.startDate);
      const end = new Date(start);
      end.setDate(start.getDate() + 6);
      this.endDate = end.toISOString().split('T')[0];

      this.weekDates = [];
      for (let i = 0; i < 7; i++) {
        const d = new Date(start);
        d.setDate(start.getDate() + i);
        const formatted = d.toISOString().split('T')[0];
        this.weekDates.push(formatted);
      }
    }
  }

  saveAttendance() {

    let payload: any;

    if (this.isDaily) {

      payload = {
        empId: this.empId,
        attendanceType: this.attendanceType,
        entries: [
          {
            date: this.selectedDate,
            status: this.status // you can make this dynamic if needed
          }
        ]
      };
    } else {
      const entries = this.weekDates.map(date => ({
        date: date,
        status: this.weeklyStatus[date] || 'Present',
        attendanceType: this.weeklyType[date] || 'General'
      }));


      payload = {
        empId: this.empId,
        attendanceType: this.attendanceType,
        entries: entries
      };
    }

    this.attendanceService.saveAttendance(payload).subscribe({
      next: (res) => {
        alert('Attendance saved successfully ✅');
        console.log('Response:', res);
      },
      error: (err) => {
        alert('Error saving attendance ❌');
        console.error(err);
      }
    });
  }
}
