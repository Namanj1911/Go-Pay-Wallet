import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Transaction } from '../models/transaction';
import { AuthenticationService } from './authentication.service';
import { Conversion } from '../models/conversion';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HttpservicesService {

  UserId = this.authService.getUserId();
  addAmountValue: any;
  baseCurrency: any;
  newCurrency: any;
  amountConverted: any;
  newAmount: any;

  lowerBase: String;
  lowerNew: String;


  constructor(private httpclient: HttpClient, private authService: AuthenticationService) { }

  setBase(baseCurrency) {
    this.lowerBase = baseCurrency;
  }

  setNew(newCurrency) {
    this.lowerNew = newCurrency;
  }

  registerUser(user: User) {
    console.log("in register user");
    return this.httpclient.post<any>("http://localhost:8765/user-auth/api/v1/auth/register", user);
  }

  saveUser(user: User) {
    console.log("in save user");
    return this.httpclient.post<any>("http://localhost:8765/user-service/api/v1/user/saveUser", user);
  }

  makeTransaction(transaction: Transaction) {
    return this.httpclient.post<any>("http://localhost:8765/user-service/api/v1/user/saveTransaction", transaction);
  }

  addAmount(amount) {
    return this.httpclient.get<any>(`http://localhost:8765/user-service/api/v1/user/add/${amount}/${this.UserId}`);
  }


  convertCurrency(conversion): Observable<any> {
    console.log("calling currency conversion with data");
    console.log(conversion);

    return this.httpclient.post<any>(`http://localhost:8765/user-service/api/v1/user/convert/${conversion['baseCurrency']}/${conversion['amountConverted']}/${conversion['newCurrency']}/${conversion['newAmount']}/${this.UserId}`, {
      baseCurrency: this.lowerBase,
      amountConverted: conversion.amountConverted,
      newCurrency: this.lowerNew,
      newAmount: conversion.newAmount,
      username: this.UserId
    }, httpOptions);
  }

  viewAllTransactions() {
    return this.httpclient.get<Array<Transaction>>(`http://localhost:8765/user-service/api/v1/user/all/${this.UserId}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.authService.getBearerToken()}`)
    });
  }

  viewAllConversions() {
    return this.httpclient.get<Array<Conversion>>(`http://localhost:8765/user-service/api/v1/user/getConversions/${this.UserId}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.authService.getBearerToken()}`)
    });
  }

}
