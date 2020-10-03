import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conversion } from '../models/conversion';
import { AuthenticationService } from '../services/authentication.service';
import { HttpservicesService } from '../services/httpservices.service';
import { RatesService } from '../services/rates.service';
import { WalletbalanceService } from '../services/walletbalance.service';

@Component({
  selector: 'app-convertcurrency',
  templateUrl: './convertcurrency.component.html',
  styleUrls: ['./convertcurrency.component.css']
})
export class ConvertcurrencyComponent implements OnInit {
  USD: Number;
  CNY: Number;
  EURO: Number;
  baseCurrencyAmount;
  newCurrencyAmount;
  newCurrency;
  baseCurrency;
  username;
  temp: any;
  conversion: Conversion;

  temporary;

  currentUSD: Number;
  currentINR: Number;
  currentEURO: Number;
  currentCNY: Number;

  constructor(private rate: RatesService, private httpservice: HttpservicesService, private authService: AuthenticationService, private wallet: WalletbalanceService, private router: Router) {
    this.conversion = new Conversion;
  }

  ngOnInit(): void {
    this.rate.getUSD().subscribe(data => {
      this.USD = data['rates']['INR'].toFixed(2);
    })
    this.rate.getCNY().subscribe(data => {
      this.CNY = data['rates']['INR'].toFixed(2);
    })
    this.rate.getEURO().subscribe(data => {
      this.EURO = data['rates']['INR'].toFixed(2);
    })
    this.username = this.authService.getUserId();
    //console.log("Inside NgOnInit");
    this.wallet.showWalletCurrencies().subscribe(
      data => {
        //console.log(data);
        this.currentINR = data['inr'];
        this.currentCNY = data['cny'];
        this.currentEURO = data['euro'];
        this.currentUSD = data['usd'];
      }
    );
  }

  selectChangeHandlerBase(event: any) {
    this.baseCurrency = event.target.value;
    //console.log("base", this.baseCurrency);
  }
  selectChangeHandlerNew(event: any) {
    this.newCurrency = event.target.value;
    //console.log("new", this.newCurrency);
  }

  onSubmit() {
    console.log("Inside Submit Button");
    this.conversion.username = this.authService.getUserId();

    this.conversion.amountConverted = this.baseCurrencyAmount;

    this.rate.getConvertedValue(this.baseCurrency, this.newCurrency).subscribe(data => {
      this.temporary = data['rates'][this.newCurrency].toFixed(2);

      this.conversion.newAmount = this.temporary * this.baseCurrencyAmount;

      this.conversion.baseCurrency = this.baseCurrency;
      this.conversion.newCurrency = this.newCurrency;

      //to convert currency to lowercase for httpService
      if (this.baseCurrency === 'EUR') {
        this.httpservice.setBase('euro');
      } else {
        this.httpservice.setBase(this.baseCurrency.toLowerCase());
      }

      if (this.newCurrency === 'EUR') {
        this.httpservice.setNew('euro');
      } else {
        this.httpservice.setNew(this.newCurrency.toLowerCase());
      }

      this.httpservice.convertCurrency(this.conversion)
        .subscribe(
          data => {
            console.log("SUCCESS!", data)
          }
        )
    })


    this.wallet.showWalletCurrencies().subscribe(
      data => {
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
