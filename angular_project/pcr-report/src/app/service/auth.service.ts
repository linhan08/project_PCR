import { Injectable } from '@angular/core';
import { Login } from '../model/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  login(loginModel: Login) {
    throw new Error("Method not implemented.");
  }

  constructor() { }
}
