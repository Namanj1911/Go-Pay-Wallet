import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RatecardComponent } from './ratecard/ratecard.component';
import { FooterComponent } from './footer/footer.component';
import { MaindashboardComponent } from './maindashboard/maindashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { ConvertcurrencyComponent } from './convertcurrency/convertcurrency.component';
import { AddamountComponent } from './addamount/addamount.component';
import { MakepaymentComponent } from './makepayment/makepayment.component';
import { ViewtransactionsComponent } from './viewtransactions/viewtransactions.component';
import { ViewconversionsComponent } from './viewconversions/viewconversions.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// import { MatButtonModule } from '@angular/material/button';
// import { MatExpansionModule } from '@angular/material/expansion';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
// import { MatCardModule } from '@angular/material/card';
// import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RatecardComponent,
    FooterComponent,
    MaindashboardComponent,
    LoginComponent,
    RegisterComponent,
    UserdashboardComponent,
    ConvertcurrencyComponent,
    AddamountComponent,
    MakepaymentComponent,
    ViewtransactionsComponent,
    ViewconversionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // MatButtonModule,
    // MatExpansionModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatButtonModule,
    // MatCardModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // MatIconModule,
    // ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
