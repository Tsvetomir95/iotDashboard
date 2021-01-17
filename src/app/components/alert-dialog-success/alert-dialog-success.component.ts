import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alert-dialog-success',
  templateUrl: './alert-dialog-success.component.html',
  styleUrls: ['./alert-dialog-success.component.scss']
})
export class AlertDialogSuccessComponent implements OnInit {

  constructor(private router: Router, private dialogRef: MatDialogRef<AlertDialogSuccessComponent>) { }

  ngOnInit() {
    this.dialogRef.afterClosed().subscribe(result => {
      this.router.navigateByUrl('/auth');  
    });
  }
  // navigateToLoginScreen() {
  //   this.router.navigateByUrl('/signin');
  // }

  
}
