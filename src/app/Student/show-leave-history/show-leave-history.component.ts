import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserServiceService } from '../../Services/user-service.service';

@Component({
  selector: 'app-show-leave-history',
  imports: [CommonModule],
  templateUrl: './show-leave-history.component.html',
  styleUrl: './show-leave-history.component.css'
})
export class ShowLeaveHistoryComponent {
employeeId: string = '';

  constructor(private userser:UserServiceService) 
  { }

  leaveHistory: any[] = [];
  ngOnInit() {
    const user = localStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
       this.employeeId = parsedUser.regId || '0';
       this.employeeId = String(parsedUser.regId || '0');

      
      // Fetch leave history for the employee
      this.getLeaveHistory(this.employeeId);
    }
  }
  getLeaveHistory(employeeId: string) {
    debugger
    this.userser.getLeaveHistory(employeeId).subscribe({
      next: (res) => {
        this.leaveHistory = res as any[];
        console.log('Leave history:', this.leaveHistory);
      },
      error: (err) => {
        console.error('Error fetching leave history:', err);
      }
    });
  }
  getStatusClass(status: string): string {
  switch (status.toLowerCase()) {
    case 'pending':
      return 'badge bg-warning text-dark';
    case 'approved':
      return 'badge bg-success';
    case 'rejected':
      return 'badge bg-danger';
    default:
      return 'badge bg-secondary';
  }
}


}
