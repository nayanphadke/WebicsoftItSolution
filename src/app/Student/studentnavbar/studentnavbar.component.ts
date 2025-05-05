import { Component } from '@angular/core';
import { UserServiceService } from '../../Services/user-service.service';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-studentnavbar',
  imports: [RouterModule],
  templateUrl: './studentnavbar.component.html',
  styleUrl: './studentnavbar.component.css'
})
export class StudentnavbarComponent {

  studentfirstName: string = '';
  studentlastName: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    const user = localStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      this.studentfirstName = parsedUser.firstName || '';
      this.studentlastName = parsedUser.lastName || '';

    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/ulogin']);
  }



}
