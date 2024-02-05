import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentService } from '../authent.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = "";
  password = "";

  constructor(private router: Router, private authenticateService: AuthentService) { }

  loggedIn: boolean = false;
  
  ngOnInit(): void {
  }

  login(): void{
    if(this.username === "admin" && this.password === "password"){
      this.authenticateService.logIn();
      this.router.navigate(['']);
    }
    else{
      alert('Invalid Username/Password');
    }
    this.loggedIn = this.authenticateService.isLoggedIn();
  }

}
