import { Component, OnInit } from '@angular/core';
import { Conversion } from '../models/conversion';
import { AuthenticationService } from '../services/authentication.service';
import { HttpservicesService } from '../services/httpservices.service';
import { WalletbalanceService } from '../services/walletbalance.service';

@Component({
  selector: 'app-viewconversions',
  templateUrl: './viewconversions.component.html',
  styleUrls: ['./viewconversions.component.css']
})
export class ViewconversionsComponent implements OnInit {
  conversions: Conversion[];
  username;
  currentUSD: Number;
  currentINR: Number;
  currentEURO: Number;
  currentCNY: Number;

  constructor(private httpservice: HttpservicesService, private authService: AuthenticationService, private wallet: WalletbalanceService) {

  }

  ngOnInit(): void {
    this.username = this.authService.getUserId();

    this.httpservice.viewAllConversions().subscribe(
      data => {
        this.conversions = data;
        for (let index = 0; index < this.conversions.length; index++) {
          let unformattedDate = this.conversions[index].dateOfTransfer;
          let date = unformattedDate.substring(0, 10);
          let time = unformattedDate.substring(11, 19);
          this.conversions[index].dateOfTransfer = date;
          this.conversions[index].time = time;
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
