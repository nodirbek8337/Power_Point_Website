import { Injectable } from '@angular/core';

const USER_KEY = 'User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  login() {
    this.setUserToLocalStorage();
  }

  logout() {
    this.removeUserFromLocalStorage();
    window.location.reload();
  }

  private setUserToLocalStorage() {
    localStorage.setItem(
      'user',
      JSON.stringify({ username: 'admin', password: '123453456' })
    );
  }

  private removeUserFromLocalStorage() {
    localStorage.removeItem('user');
  }
}
