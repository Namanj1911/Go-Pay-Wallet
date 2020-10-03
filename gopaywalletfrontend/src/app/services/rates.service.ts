import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatesService {

  baseCurrency: any;
  newCurrency: any;

  constructor(private httpClient: HttpClient) { }

  getUSD() {
    return this.httpClient.get(`https://api.ratesapi.io/api/latest?base=USD&symbols=INR`);
  }

  getCNY() {
    return this.httpClient.get(`https://api.ratesapi.io/api/latest?base=CNY&symbols=INR`);
  }

  getEURO() {
    return this.httpClient.get(`https://api.ratesapi.io/api/latest?base=EUR&symbols=INR`);
  }

  getConvertedValue(baseCurrency, newCurrency): Observable<any> {
    console.log("in service api");
    
    console.log(baseCurrency);
    console.log(newCurrency);
    return this.httpClient.get(`https://api.ratesapi.io/api/latest?base=${baseCurrency}&symbols=${newCurrency}`)
  }

  setBase(baseCurrency){
    this.baseCurrency = baseCurrency;
  }

  setNew(newCurrency){
    this.newCurrency = newCurrency;
  }

}
