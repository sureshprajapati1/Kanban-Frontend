import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  constructor() { }

  login() {
    return this.isLoggedIn
  }
  logout() {
    this.isLoggedIn = false;
  }
}

