import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private routes : Router, private auth: AuthService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean  | Promise<boolean> | boolean | UrlTree {
    if (this.auth.isLoggedIn()) {
        return true;
      } else {
        return this.routes.parseUrl('/login');
      }
    }
    }
  
  
  