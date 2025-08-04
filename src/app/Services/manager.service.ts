import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

   private baseUrl="https://localhost:7062/User";
  constructor(private http:HttpClient,private router:Router) { }

getPendingRequests() {
  return this.http.get(`${this.baseUrl}/pending`);
}

updateLeaveStatus(id: number, status: string) {
  return this.http.put(`${this.baseUrl}/update-status/${id}`, status, {
    headers: { 'Content-Type': 'application/json' }
  });
}


}
