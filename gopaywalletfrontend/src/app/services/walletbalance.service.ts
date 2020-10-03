import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class WalletbalanceService {

  userId = this.authService.getUserId();

  constructor(private httpClient: HttpClient, private authService: AuthenticationService) { }

  showWalletCurrencies(): Observable<any> {
    console.log("into wallet service");
    console.log("getting all currencies");
    console.log(this.userId);
    
    return this.httpClient.get<any>(`http://localhost:8765/user-service/api/v1/user/currencies/${this.userId}`);
  }

}
