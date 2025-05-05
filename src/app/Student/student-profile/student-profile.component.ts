import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-student-profile',
  imports: [RouterModule],
  templateUrl: './student-profile.component.html',
  styleUrl: './student-profile.component.css'
})
export class StudentProfileComponent {

  studentregid:string='';
  studentfirstName: string = '';
  studentlastName: string = '';
  email:string='';
  phone:string='';
  adharNo:string='';
  panNo:string='';
  admissionType:string='';
  technology:string='';
  feesPaid:string='';
  remainingFees:string='';
  paymentType:string='';


  constructor(private router: Router) {}


  ngOnInit() {
    const user = localStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      this.studentregid = parsedUser.regId || '';
      this.studentfirstName = parsedUser.firstName || '';
      this.studentlastName = parsedUser.lastName || '';
      this.email = parsedUser.email || '';
      this.phone = parsedUser.mobileNo || '';
      this.adharNo = parsedUser.aadharNo || '';
      this.panNo = parsedUser.panNo || '';
      this.admissionType = parsedUser.admissionType || '';
      this.technology = parsedUser.technology || '';
      this.feesPaid = parsedUser.feesPaid || '';
      this.remainingFees = parsedUser.remaining || '';
      this.paymentType = parsedUser.paymentType || '';



    }
    
  }
  EditUser() {
    this.router.navigate([`student/res/${this.studentregid}`]);
  }
  
}
