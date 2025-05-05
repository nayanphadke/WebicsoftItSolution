import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-userlogin',
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './userlogin.component.html',
  styleUrl: './userlogin.component.css'
})
export class UserloginComponent {

  loginObj: any = {
    email: '',
    password: ''
  };

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit() {
    if (!this.loginObj.email || !this.loginObj.password) {
      alert("Please enter both email and password.");
      return;
    }

    this.auth.login(this.loginObj).subscribe(
      (res: any) => {
        console.log("Login successful", res);
        localStorage.setItem("token", res.token); 
        localStorage.setItem("user", JSON.stringify(res.user));
        // store JWT token if returned
        if (res.Role === 'ADMIN') {
          alert("login successfully")
          this.router.navigate(['/student']);
        } else if (res.role === "STUDENT") {
          alert("login successfully")
           this.router.navigate(['/student']);
        } else {
          alert("login failed")
          this.router.navigate(['/']);
        }
      },
      (err:any) => {
        console.error("Login failed", err);
        alert("Invalid email or password.");
      }
    );
  }

}
