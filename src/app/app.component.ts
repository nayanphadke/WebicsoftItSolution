import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { UserRegistrationComponent } from "./User/user-registration/user-registration.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { CommonModule } from '@angular/common';
import { UserAttendanceComponent } from "./User/user-attendance/user-attendance.component";
import { ManagerLeaveApprovalsComponent } from "./Manager/manager-leave-approvals/manager-leave-approvals.component";
import { ShowLeaveHistoryComponent } from "./Student/show-leave-history/show-leave-history.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WebicsoftItSolution';

  showLayout = true;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;
        // Hide header/footer for dashboard layouts
        if (url.startsWith('/admin') || url.startsWith('/student')) {
          this.showLayout = false;
        } else {
          this.showLayout = true;
        }
      }
    });
  }
}
