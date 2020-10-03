import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Add } from '../models/add';
import { AuthenticationService } from '../services/authentication.service';
import { HttpservicesService } from '../services/httpservices.service';
import { WalletbalanceService } from '../services/walletbalance.service';

@Component({
  selector: 'app-addamount',
  templateUrl: './addamount.component.html',
  styleUrls: ['./addamount.component.css']
})
export class AddamountComponent implements OnInit {

  addedAmount: Add;
  currentUSD: Number;
  currentINR: Number;
  currentEURO: Number;
  currentCNY: Number;
  username;

  constructor(private httpservice: HttpservicesService, private wallet: WalletbalanceService, private authService: AuthenticationService, private router: Router) {
    this.addedAmount = new Add;
  }

  ngOnInit(): void {
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

  onSubmit(amount) {
    this.addedAmount.amount = amount.value;
    console.log(this.addedAmount);
    this.httpservice.addAmount(this.addedAmount.amount)
      .subscribe(
        data => console.log("success!", data),
        error => console.error(error)
      )

    this.wallet.showWalletCurrencies().subscribe(
      data => {
        console.log(data);
        this.currentINR = data['inr'];
        this.currentCNY = data['cny'];
        this.currentEURO = data['euro'];
        this.currentUSD = data['usd'];
      }
    );
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);


    //auto-reload the page
    this.router.navigate(['/userdashboard']);
    setTimeout(() => {
      this.router.navigate(['/convertcurrency'])
    }, 100);
  }

}
