import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  user!: User;
  constructor(private userService: UserService) {
    userService.userObservable.subscribe((newUser) => {
      this.user = newUser;
    });
  }
  ngOnInit(): void {}

  logout() {
    this.userService.logout();
  }

  get isAuth() {
    return this.user.token;
  }
}
