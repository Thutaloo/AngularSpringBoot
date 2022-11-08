import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  public isLogged: boolean;
  public isAdmin: boolean;

  constructor() { }

  checkLogin(): boolean {
    return this.isLogged = false;
  }

  checkAdmin(): boolean {
    return this.isAdmin = false;
  }
}
