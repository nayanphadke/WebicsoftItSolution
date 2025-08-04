import { Component } from '@angular/core';
import { AdminnavbarComponent } from "../adminnavbar/adminnavbar.component";
import { Router, RouterModule } from '@angular/router';
import { AdminsidebarComponent } from '../adminsidebar/adminsidebar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-layout',
  imports: [RouterModule,AdminnavbarComponent, AdminsidebarComponent, CommonModule, AdminnavbarComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {

  isSidebarVisible: boolean = false;



sidebarClass() {
  if (this.isSidebarVisible) {
    return 'col-4';
  }
  else{
    return 'col-0';
  }
}
 get contentClass() {
    if (this.isSidebarVisible) {
    return 'col-8';
  }
  else{
    return 'col-12';
  }
  }
  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

}
