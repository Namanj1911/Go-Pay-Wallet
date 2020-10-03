import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  userId = new BehaviorSubject<String>("101");
  name = new BehaviorSubject<String>("user");
  contact = new BehaviorSubject<String>("100100");
  baseCurrency = new BehaviorSubject<String>("inr");
  accountNumber = new BehaviorSubject<String>("100100");
  accountType = new BehaviorSubject<String>("saving");
  username = new BehaviorSubject<String>("user");
  userPassword = new BehaviorSubject<String>("pass");
  constructor() { }
}
