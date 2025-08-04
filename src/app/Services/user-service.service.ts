import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  baseUrl="https://localhost:7062/User";

   addRegistration(registrationobj:any){
      return this.http.post(`${this.baseUrl}/addRegistrations`,registrationobj)
   }

   getUserRole():Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/GetUserRoles`)
   }
getAdmissionType():Observable<any[]>{
  return this.http.get<any[]>(`${this.baseUrl}/GetUserAdmissionType`)
}
getTechnology():Observable<any[]>{
  return this.http.get<any[]>(`${this.baseUrl}/GetUserTechnology`)
 }
 getPaymentType():Observable<any[]>{
  return this.http.get<any[]>(`${this.baseUrl}/GetUserPaymentType`)
 }
registerUser(userData: any, file: File): Observable<any> {
  const formData = new FormData();

  // Append user properties to FormData
  formData.append('firstName', userData.firstName);
  formData.append('middleName', userData.middleName);
  formData.append('lastName', userData.lastName);
  formData.append('mobileno', userData.mobileno);
  formData.append('alterMo', userData.alterMo);
  formData.append('email', userData.email);
 
  formData.append('role', userData.role);
  formData.append('aadharNo', userData.aadharNo);
  formData.append('panNo', userData.panNo);
  formData.append('password', userData.password);
  formData.append('confirmPassword', userData.confirmPassword);
  formData.append('date',userData.date);
  formData.append('admissionType', userData.admissionType);
  formData.append('technology', userData.technology);
  formData.append('feesPaid', userData.feesPaid);
  formData.append('remaining', userData.remaining);
  formData.append('paymentType', userData.paymentType);
  
  
  // Append file
  if (file) {
    formData.append('file', file);
  }

  return this.http.post<any>(`${this.baseUrl}/addRegistrations`, formData);
}



//for update user 
updateUser(id: string, userData: any, file: File | null): Observable<any> {
  const formData = new FormData();

  // Append user properties
  formData.append('firstName', userData.firstName);
  formData.append('middleName', userData.middleName);
  formData.append('lastName', userData.lastName);
  formData.append('mobileno', userData.mobileno);
  formData.append('alterMo', userData.alterMo);
  formData.append('email', userData.email);
  formData.append('role', userData.role);
  formData.append('aadharNo', userData.aadharNo);
  formData.append('panNo', userData.panNo);
  formData.append('password', userData.password);
  formData.append('confirmPassword', userData.confirmPassword);
  formData.append('date', userData.date);
  formData.append('admissionType', userData.admissionType);
  formData.append('technology', userData.technology);
  formData.append('feesPaid', userData.feesPaid);
  formData.append('remaining', userData.remaining);
  formData.append('paymentType', userData.paymentType);

  // Append file only if new file is selected
  if (file) {
    formData.append('file', file);
  }

  return this.http.put<any>(`${this.baseUrl}/updateRegistration/${id}`, formData);
}

getUserById(id:string){
  return this.http.get(`${this.baseUrl}/getUserById/${id}`);

}
saveAttendance(payload: any) {
    return this.http.post(`${this.baseUrl}/save`, payload);
  }


  // employee leave
   applyLeave(leaveData: any) {
    return this.http.post(`${this.baseUrl}/apply`, leaveData);
  }

}


