import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  constructor(
    private readonly loginService: LoginService,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.email.value && this.password.value) {
      this.loginService
        .login({
          email: this.email.value,
          password: this.password.value,
        })
        .subscribe(() => this.router.navigate(['/']));
    }
  }
}
