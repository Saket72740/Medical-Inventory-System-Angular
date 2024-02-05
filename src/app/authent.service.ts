import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentService {

  loggedIn: boolean = false;
  constructor() { }

  logIn():void{
    this.loggedIn = true;
  }

  logOut(): void{
    this.loggedIn = false;
  }

  isLoggedIn(): boolean{
    return this.loggedIn;
  }
}
