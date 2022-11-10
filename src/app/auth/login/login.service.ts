import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginInput } from '../../../lib/graphql/__generated__';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private readonly httpClient: HttpClient) {}

  login(loginInput: LoginInput) {
    return this.httpClient.post('api/auth/login', loginInput);
  }
}
