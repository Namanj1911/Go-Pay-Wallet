import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { HttpservicesService } from '../services/httpservices.service';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User;
  constructor(private router: Router, private userDataService: UserdataService, private httpservices: HttpservicesService) {
    this.user = new User;
  }

  ngOnInit(): void {
  }

  onSubmit(uname, ucontact, ubaseCurrency, uaccountNumber, uaccountType, uusername, upassword) {
    this.user.name = uname.value;
    this.user.contact = ucontact.value;
    this.user.baseCurrency = ubaseCurrency.value;
    this.user.accountNumber = uaccountNumber.value;
    this.user.username = uusername.value;
    this.user.userPassword = upassword.value;
    this.user.accountType = uaccountType.value;
    console.log(this.user);
    this.httpservices.registerUser(this.user)
      .subscribe(
        data => console.log("success!", data),
        error => console.error(error)
      )

    this.httpservices.saveUser(this.user)
      .subscribe(
        data => console.log("success!", data),
        error => console.error(error)
      )
    this.router.navigateByUrl('/login');
  }
}
