import { compileDeclareComponentFromMetadata } from '@angular/compiler';
import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UserRegistrationComponent } from './User/user-registration/user-registration.component';
import { UserloginComponent } from './User/userlogin/userlogin.component';
import { StudentLayoutComponent } from './Student/student-layout/student-layout.component';
import { StudentDashboardComponent } from './Student/student-dashboard/student-dashboard.component';
import { AdminLayoutComponent } from './Admin/admin-layout/admin-layout.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { StudentProfileComponent } from './Student/student-profile/student-profile.component';
import { UserAttendanceComponent } from './User/user-attendance/user-attendance.component';
import { StudentLeaveComponent } from './Student/student-leave/student-leave.component';

export const routes: Routes = [
    {path:'',component:HomePageComponent},
    { path: 'res', component: UserRegistrationComponent},
    { path: 'ulogin', component:UserloginComponent },
    {path:'student',component:StudentLayoutComponent,
        children:[
            {path:'',component:StudentDashboardComponent},
            {path:'studentdash',component:StudentDashboardComponent},
              {path:'studentleave',component:StudentLeaveComponent},

            {path:'studentprofile',component:StudentProfileComponent},
             {path:'attendance',component:UserAttendanceComponent},
            { path: 'res/:id', component: UserRegistrationComponent }

        ]
    },
    {path:'admin',component:AdminLayoutComponent,
        children:[
            {path:'',component:AdminDashboardComponent},
            {path:'admindash/:id',component:AdminDashboardComponent}
        ]
    }



];
