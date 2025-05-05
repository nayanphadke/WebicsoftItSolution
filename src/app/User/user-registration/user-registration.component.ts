import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserServiceService } from '../../Services/user-service.service';
import { Router, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-registration',
  imports: [FormsModule, CommonModule,RouterModule],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent {

  studentId: string | null = null;
  isEditMode: boolean = false;

  constructor(private user: UserServiceService ,private route:ActivatedRoute) { }


  registrationobj: any = {
   
   "date": this.registrationDate()
  }
  Urole: any[] = []
  AdmType:any[]=[]
  Tech:any[]=[]
  PmtType:any[]=[]

  ngOnInit() {
    this.studentId=this.route.snapshot.paramMap.get('id');
    this.getUserRole()
    this.getAddmissionType()
    this.getTechnology()
    this.getPayment()


    this.studentId = this.route.snapshot.paramMap.get('id');
    if (this.studentId) {
      this.isEditMode = true;
      this.loadStudentData(this.studentId);

}
else{
 this.onSubmit();
}

    
  }
  loadStudentData(id: string) {
    this.user.getUserById(id).subscribe(
      (res) => {
        this.registrationobj = res;
        console.log("Loaded student:", this.registrationobj);
      },
      (err) => {
        console.error("Failed to load student", err);
      }
    );
  }




  registrationDate() {
    var today = new Date();
    return today.toISOString().split('T')[0];  // Format: 'YYYY-MM-DD'
  }

  isStrongPassword(password: string): boolean {
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return strongPasswordRegex.test(password);
  }
  isValidPAN(pan: string): boolean {
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
    return panRegex.test(pan);
  }
  isValidAadhar(aadhar: string): boolean {
    const aadharRegex = /^[0-9]{12}$/;
    return aadharRegex.test(aadhar);
  }

  isValidMobile(mobile: string): boolean {
    const mobileregex = /^[0-9]{10}$/;
    return mobileregex.test(mobile)
  }
  isValidName(name: string): boolean {
    const nameregx = /^[A-Za-z\s]+$/;
    return nameregx.test(name)
  }

  allowOnlyCharacters(event: KeyboardEvent) {
    const keyCode = event.key;
    if (!/^[A-Za-z\s]+$/.test(keyCode)) {
      event.preventDefault();
    }
  }
  allowOnlyNumbers(event: KeyboardEvent) {
    const keyCode = event.key;
    if (!/^[0-9]$/.test(keyCode)) {
      event.preventDefault(); // Blocks non-numeric characters
    }
  }

  selectedFile: File | null = null;
  selectedFileName: string = "";

  
  getUserRole() {
    this.user.getUserRole().subscribe(
      (res) => {
        console.log("Roles fetched:", res); // Debugging output
        this.Urole = res;
      },
      (err) => {
        console.error("Error fetching roles", err);
      }
    );
  }
  
  getAddmissionType(){
    this.user.getAdmissionType().subscribe(
      (res)=>{
        console.log("admission fetch ",res)
        this.AdmType=res;
      },
      (err)=>{
        console.error("error fetching")
      }
    )
  }
  getTechnology(){
    this.user.getTechnology().subscribe(
      (res)=>{
        console.log("technology fetch",res)
        this.Tech=res
      },
      (err)=>{
        console.error("error fetching")
      }
    )
  }
  getPayment(){
    this.user.getPaymentType().subscribe(
      (res)=>{
        console.log("payment fetch",res)
        this.PmtType=res
      },
      (err)=>{
        console.error("error fetching")
      }
    )
  }
  fileselect: File | null = null;
  imageError: string = '';

  uploadImage(event: any) {
    const file = event.target.files?.[0]; // Get the first selected file safely

    if (!file) {
      this.imageError = "No file selected.";
      this.fileselect = null;
      return;
    }

    // Check if file type is JPEG or JPG
    if (file.type !== "image/jpeg" && file.type !== "image/jpg") {
      this.imageError = "Please select a JPEG or JPG image.";
      this.fileselect = null;
      return;
    }

    // Check if file size is between 100KB and 600KB
    if (file.size > 600000 || file.size < 100000) {
      this.imageError = "Image size should be between 100KB and 600KB.";
      this.fileselect = null;
      return;
    }

    // If all checks pass, store the file and clear the error
    this.fileselect = file;
    this.imageError = "";
    console.log("File selected:", file.name);
  }



  onSubmit() {
    if (!this.registrationobj || !this.fileselect) {
      console.log("please fill the all field")
      return;
    }
    this.user.registerUser(this.registrationobj, this.fileselect).subscribe(
      (response) => {
        this.openByDocument();
        console.log("User registered successfully!", response);
      },
      (error) => {
        console.log("Error:", error);
      }
    );



  }
  openByDocument() {
    const model = document.getElementById("myModel")
    if (model != null) {
      model.style.display = "block"
    }
  }
  closeByDocument() {
    const model = document.getElementById("myModel")
    if (model != null) {
      model.style.display = "none"
    }
  }
}
