import { BrowserModule } from '@angular/platform-browser';


import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';

import { SideNavMenuComponent } from './components/side-nav-menu/side-nav-menu.component';
import { HumidityComponent } from './components/humidity/humidity.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MaterialModule } from './material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { AlertDialogComponent } from './components/alert-dialog/alert-dialog.component';
import { AlertDialogSuccessComponent } from './components/alert-dialog-success/alert-dialog-success.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    SideNavMenuComponent,
    HumidityComponent,
    WelcomeComponent,
    AlertDialogComponent,
    AlertDialogSuccessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [AlertDialogComponent, AlertDialogSuccessComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
