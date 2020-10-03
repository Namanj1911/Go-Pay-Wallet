import { Component, OnInit } from '@angular/core';
import { RatesService } from '../services/rates.service';

@Component({
  selector: 'app-ratecard',
  templateUrl: './ratecard.component.html',
  styleUrls: ['./ratecard.component.css']
})
export class RatecardComponent implements OnInit {
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

  constructor(private rate: RatesService) { }

  ngOnInit(): void {
    this.rate.getUSD().subscribe(data=> {
      this.USD = data['rates']['INR'].toFixed(2);
      this.currentSellUSD = this.add(this.USD, 1)

    })
    this.rate.getCNY().subscribe(data=> {
      this.CNY = data['rates']['INR'].toFixed(2);
    })
    this.rate.getEURO().subscribe(data=> {
      this.EURO = data['rates']['INR'].toFixed(2);
    })
  }

  add(a, b) {
    return a+b;
  }

  subtract(a,b){
    return a-b;
  }

}
