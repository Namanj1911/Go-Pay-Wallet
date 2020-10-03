import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { UserInput } from '../models/user-input';
import { HttpHeaders } from '@angular/common/http';
import { HttpservicesService } from '../services/httpservices.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    username = new FormControl();
    password = new FormControl();
    public submitMessage: string;
    public user: FormGroup;

    userInput: UserInput;

    constructor(private fb: FormBuilder, private router: Router, private authService: AuthenticationService, private httpClient: HttpservicesService) {
        this.userInput = new UserInput('user', 'pass');
    }

    ngOnInit(): void {
        this.user = this.fb.group({
            username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            password: ['', Validators.required]
        });
    }

    onSubmit(uusername, upassword) {
        //authentication and posting of user data 
        this.userInput.username = uusername.value;
        this.userInput.password = upassword.value;
        console.log(this.userInput);
        const token = this.authService.authenticateUser(this.userInput).subscribe(
            data => {
                if (data['token']) {
                    console.log(data['token']);
                    this.authService.setBearerToken(data['token']);
                    this.authService.setUserId(this.userInput.username)
                    this.router.navigate(['/userdashboard']);
                } else {
                    this.router.navigate(['/login']);
                }
            });
    }

}
