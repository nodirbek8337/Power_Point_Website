import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}
  ngOnInit(): void {}

  login(form: NgForm) {
    if (form.value.username === 'admin' && form.value.password === '12345') {
      this.userService.login();
      setTimeout(() => {
        this.router.navigate(['/menu']);
      }, 1000);
    } else {
      alert('Login xato');
    }
  }
}
