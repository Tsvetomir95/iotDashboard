import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav-menu',
  templateUrl: './top-nav-menu.component.html',
  styleUrls: ['./top-nav-menu.component.scss']
})
export class TopNavMenuComponent implements OnInit {
  @Output() toggleSideNav = new EventEmitter<boolean>();
  constructor(private router: Router) { }
  openNav = false;
  ngOnInit() {
  }

  navigateToSignIn() {
    this.router.navigateByUrl("/signin");
  }

  openSideNav(){
    this.toggleSideNav.emit(this.openNav = !this.openNav);
  }
}
