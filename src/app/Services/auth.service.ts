import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl="https://localhost:7062/User";
  constructor(private http:HttpClient,private router:Router) { }

login(data:any){
  return this.http.post(`${this.baseUrl}/login`,data)

}



storeToken(token: string) {
  localStorage.setItem('jwtToken', token);
}

getToken() {
  return localStorage.getItem('jwtToken');
}

logout() {
  localStorage.removeItem('jwtToken');
  this.router.navigate(['/login']);
}

isLoggedIn() {
  return !!localStorage.getItem('jwtToken');
}
}


