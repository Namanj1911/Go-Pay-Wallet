import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from '../models/transaction';
import { AuthenticationService } from '../services/authentication.service';
import { HttpservicesService } from '../services/httpservices.service';
import { WalletbalanceService } from '../services/walletbalance.service';

@Component({
  selector: 'app-makepayment',
  templateUrl: './makepayment.component.html',
  styleUrls: ['./makepayment.component.css']
})

export class MakepaymentComponent implements OnInit {
  transaction: Transaction;
  username;
  currentUSD: Number;
  currentINR: Number;
  currentEURO: Number;
  currentCNY: Number;

  constructor(private router: Router, private httpservice: HttpservicesService, private authService: AuthenticationService, private wallet: WalletbalanceService) {
    this.transaction = new Transaction;
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

  onSubmit(currencyUsed, amountTransferred, accountTransferredto, transactionCategory) {
    this.transaction.accountTransferredto = accountTransferredto.value;
    this.transaction.amountTransferred = amountTransferred.value;
    this.transaction.currencyUsed = currencyUsed.value;
    this.transaction.transactionCategory = transactionCategory.value;
    this.transaction.username = this.authService.getUserId();
    console.log(this.transaction);
    this.httpservice.makeTransaction(this.transaction).subscribe(
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
      this.router.navigate(['/makepayment'])
    }, 100);
  }
}
