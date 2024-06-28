import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn = false;

  constructor() { }

  setLoggedIn(value: boolean) {
    this.isLoggedIn = value;
  }

  isLoggedInUser() {
    return this.isLoggedIn;
  }
  
}
