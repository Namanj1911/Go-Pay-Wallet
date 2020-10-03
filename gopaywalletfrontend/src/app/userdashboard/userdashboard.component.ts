import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { RatesService } from '../services/rates.service';
import { WalletbalanceService } from '../services/walletbalance.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  USD: Number;
  CNY: Number;
  EURO: Number;

  currentSellUSD: Number;
  currentSellINR: Number;
  currentSellEURO: Number;
  currentSellCNY: Number;

  currentBuyUSD: Number;
  currentBuyINR: Number;
  currentBuyEURO: Number;
  currentBuyCNY: Number;
  
  username;
  currentUSD: Number;
  currentINR: Number;
  currentEURO: Number;
  currentCNY: Number;

  constructor(private router: Router, private rate: RatesService, private authService: AuthenticationService, private wallet: WalletbalanceService) { }

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
    this.username = this.authService.getUserId();
    this.wallet.showWalletCurrencies().subscribe(
      data => {
        console.log(data);
        this.currentINR = data['inr'];
        this.currentCNY = data['cny'];
        this.currentEURO = data['euro'];
        this.currentUSD = data['usd'];
      }
    );
  }

  onMakePayment() {
    this.router.navigateByUrl("/makepayment")
  }
  onAddAmount() {
    this.router.navigateByUrl("/addamount")
  }
  onConvertCurrency() {
    this.router.navigateByUrl("/convertcurrency")
  }
  onViewTransactions() {
    this.router.navigateByUrl("/viewtransactions")
  }
  onViewConversions() {
    this.router.navigateByUrl("/viewconversions")
  }

}
