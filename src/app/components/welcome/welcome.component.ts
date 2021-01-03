import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  imageUrl = 'https://cdn.pixabay.com/photo/2016/11/21/15/38/dock-1846008_960_720.jpg';
  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(()=> {
      this.router.navigateByUrl('home');
    },4000);
  }

}
