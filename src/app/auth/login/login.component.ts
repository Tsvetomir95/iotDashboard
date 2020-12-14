import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signInForm: FormGroup;
  constructor(private router: Router) { }

  ngOnInit() {

    this.signInForm = new FormGroup({
      email: new FormControl(null, {
      updateOn: 'blur',
      validators: [Validators.required, Validators.email]        
      }),
      password: new FormControl(null, {
      updateOn: 'blur',
      validators: [Validators.required]        
      }),
      
      
    });
  }

  onSignIn() {

  }

  navigateSignUp() {
    this.router.navigateByUrl('/signup');
 }

}
