import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RatesService } from '../services/rates.service';

@Component({
  selector: 'app-maindashboard',
  templateUrl: './maindashboard.component.html',
  styleUrls: ['./maindashboard.component.css']
})
export class MaindashboardComponent implements OnInit {

  USD: Number;
  CNY: Number;
  EURO: Number;

  constructor(private httpClient: HttpClient, private rate: RatesService, private router: Router) { }

  ngOnInit(): void {
    this.rate.getUSD().subscribe(data=> {
      this.USD = data['rates']['INR'].toFixed(2);
    })
    this.rate.getCNY().subscribe(data=> {
      this.CNY = data['rates']['INR'].toFixed(2);
    })
    this.rate.getEURO().subscribe(data=> {
      this.EURO = data['rates']['INR'].toFixed(2);
    })
  }

  onRegister() {
    this.router.navigateByUrl("/register");
  }

  onLogin() {
    this.router.navigateByUrl("/login");
  }
  onAbout() {
    this.router.navigateByUrl("/maindashboard");
  }
}
