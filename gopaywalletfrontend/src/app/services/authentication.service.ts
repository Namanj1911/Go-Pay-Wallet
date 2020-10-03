import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public httpClient: HttpClient) {
  }

  authenticateUser(data):Observable<any> {

    console.log("into service");
    console.log(data);
    return this.httpClient.post("http://localhost:8765/user-auth/api/v1/auth/login" , data, httpOptions);
  }

  setBearerToken(token) {
    localStorage.setItem('bearerToken', token);
  }

  getBearerToken() {
    return localStorage.getItem('bearerToken');
  }

  setUserId(userId) {
    localStorage.setItem("userId", userId);
  }

  getUserId() {
    return localStorage.getItem("userId");
  }

  isUserAuthenticated(): boolean {
    if(localStorage.getItem('bearerToken')!= undefined){
      return true;
    } else {
      return false;
    }
  }

}
