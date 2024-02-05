import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentService } from '../authent.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isCollapsed: boolean = true;
  name = "angular"
  loginAdmin = "Log In";
  loggedIn = false;
  constructor(private router: Router, public authentication: AuthentService) { }

  ngOnInit(): void {
    this.loggedIn = this.authentication.isLoggedIn()
  }


  logOut(): void{
    this.authentication.logOut()
    alert('Log Out Successfully');
    console.log("Inside logOut Dashboard component isLoggedIn?: " + this.authentication.isLoggedIn());
    this.router.navigate([""]);
  }
}
