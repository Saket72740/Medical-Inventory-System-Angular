import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentService } from '../authent.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentGuard implements CanActivate {

  constructor(private router: Router, private authenticateService: AuthentService){
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authenticateService.isLoggedIn()){
        console.log("Inside canActive method loggedIn? : " + this.authenticateService.isLoggedIn());
        return true;
      }
      else{
        this.router.navigate(['login']);
        return false;
      }
  }
  
}
