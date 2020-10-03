import { Component, OnInit } from '@angular/core';
import { Transaction } from '../models/transaction';
import { AuthenticationService } from '../services/authentication.service';
import { HttpservicesService } from '../services/httpservices.service';
import { WalletbalanceService } from '../services/walletbalance.service';

@Component({
  selector: 'app-viewtransactions',
  templateUrl: './viewtransactions.component.html',
  styleUrls: ['./viewtransactions.component.css']
})
export class ViewtransactionsComponent implements OnInit {

  transactions: Transaction[];
  username;
  currentUSD: Number;
  currentINR: Number;
  currentEURO: Number;
  currentCNY: Number;

  constructor(private httpservice:HttpservicesService, private authService: AuthenticationService, private wallet: WalletbalanceService) {

   }

  ngOnInit(): void {
    this.username = this.authService.getUserId();

    this.httpservice.viewAllTransactions().subscribe(
      data => {
        this.transactions = data;
        console.log(data);
        for (let index = 0; index < this.transactions.length; index++) {
          let unformattedDate = this.transactions[index].dateOfTransfer;
          let date = unformattedDate.substring(0, 10);
          let time = unformattedDate.substring(11, 19);
          this.transactions[index].dateOfTransfer = date;
          this.transactions[index].time = time;
        }
      }, 
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
  }
}
