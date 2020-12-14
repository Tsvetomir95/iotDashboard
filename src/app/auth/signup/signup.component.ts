import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertDialogSuccessComponent } from 'src/app/components/alert-dialog-success/alert-dialog-success.component';
import { AlertDialogComponent } from 'src/app/components/alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  signUpFormNext: FormGroup;
  maxDate;
  isEditable = false;
  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);

    this.signUpForm = new FormGroup({
      firstName: new FormControl(null, {
      updateOn: 'blur',
      validators: [Validators.required]        
      }),
      lastName: new FormControl(null, {
      updateOn: 'blur',
      validators: [Validators.required]        
      }),
      email: new FormControl(null, {
      updateOn: 'blur',
      validators: [Validators.required, Validators.email]        
      }),
      password: new FormControl(null, {
      updateOn: 'blur',
      validators: [Validators.required, Validators.minLength(8), Validators.maxLength(30)]        
      }),
      confirmPassword: new FormControl(null, {
      updateOn: 'blur',
      validators: [Validators.required, Validators.minLength(8), Validators.maxLength(30)]        
      }),
     
      
    });
    
    this.signUpFormNext = new FormGroup({
      terms: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]        
        }),
        date: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]        
        }),
        gander: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]        
        }),
    });
  }
 
  onSignUp() {
    if(this.signUpForm.value.password !== this.signUpForm.value.confirmPassword) {
      this.dialog.open(AlertDialogComponent )
      return;
    } 
    if (!this.signUpForm.valid && !this.signUpFormNext.valid) {
      return;
    }else {
      console.log(this.signUpForm, this.signUpFormNext);
      this.dialog.open(AlertDialogSuccessComponent);
            
    }
  }


  }
