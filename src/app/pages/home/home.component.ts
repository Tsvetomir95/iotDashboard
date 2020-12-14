import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatButtonToggle, MatSidenav } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  opened;
  tempValue = 25;
  image = '../../../assets/img/light-off.png';
  @ViewChild('sidenav', {static: false} ) sidenav: MatSidenav; 
  constructor() { }

  ngOnInit() {
  }
  toggleSideNav(child) {
    this.sidenav.toggle().then(() => {
      console.log('open')
    });
  }


  putTheLights(value) {
    if(value === 'ON') {
      this.image = '../../../assets/img/light-on.png';
    }else  {
      this.image = '../../../assets/img/light-off.png';
    }
  }
}
