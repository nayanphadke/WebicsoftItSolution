import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../Services/manager.service';
import { NgModel } from '@angular/forms';
import { pipe } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manager-leave-approvals',
  imports: [CommonModule],
  templateUrl: './manager-leave-approvals.component.html',
  styleUrl: './manager-leave-approvals.component.css'
})
export class ManagerLeaveApprovalsComponent implements OnInit {

 pendingLeaves: any[] = [];

  constructor(private leaveService: ManagerService) {}

  ngOnInit() {
    this.fetchPendingLeaves();
  }

  fetchPendingLeaves() {
    this.leaveService.getPendingRequests().subscribe({
   next: (res) => this.pendingLeaves = res as any[],
      error: (err) => console.error(err)
    });
  }

  updateLeave(id: number, status: string) {
    this.leaveService.updateLeaveStatus(id, status).subscribe({
      next: () => {
        alert(`Leave ${status}`);
        this.fetchPendingLeaves(); // Refresh table
      },
      error: () => alert('Error updating status')
    });
  }
}
