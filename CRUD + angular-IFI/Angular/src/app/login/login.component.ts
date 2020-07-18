import { Component, OnInit } from '@angular/core';
import { Login } from '../model/login';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
import { Register } from '../model/register';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginModel: Login = new Login();
  signModel: Register = new Register();
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }


  ngOnInit() {
    document.querySelector('.img-btn').addEventListener('click', function()
    {
      document.querySelector('.cont').classList.toggle('s-signup')
    });
  }

  login() {
    this.authService.login(this.loginModel).subscribe(data => {
      console.log(data);
      this.tokenStorage.saveToken(data.token);
    }, err => {

    });
  }

  signupUser() {
    this.authService.register(this.signModel).subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    });
  }

}
