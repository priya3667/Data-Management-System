import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: boolean = false;
  constructor() { }
  isLoggedIn(): boolean {
    return this.loggedIn;
  }
  setLoggedIn(value: boolean) {
    this.loggedIn = value;
  }
}
