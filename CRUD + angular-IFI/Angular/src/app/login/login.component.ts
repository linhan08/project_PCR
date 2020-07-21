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

  //login
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  role: string[] = [];

  //register
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage1 = '';
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }


  ngOnInit() {
    //check token
    if (this.tokenStorage.getToken()) {

      this.isLoggedIn = true;
      this.role = this.tokenStorage.getUser().roles;
    }
  }
    signupButton(){
      document.querySelector('.img-btn').addEventListener('click', function()
    {
      document.querySelector('.cont').classList.toggle('s-signup')
    });
  }

  // login() {
  //   this.authService.login(this.loginModel).subscribe(data => {
  //     console.log(data);
  //     this.tokenStorage.saveToken(data.token);
  //   }, err => {

  //   });
  // }

  // signupUser() {
  //   this.authService.register(this.signModel).subscribe(data => {
  //     console.log(data);
  //   }, err => {
  //     console.log(err);
  //   });
  // }

  changeRole(e) {
    this.signModel.role = e.target.value;
  }

  onSubmitLogin() {
    this.authService.login(this.loginModel).subscribe(
      data => {
        console.log(data);
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.role = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
  reloadPage() {
    window.location.reload();
  }

  onSubmitSignup() {
    this.authService.register(this.signModel).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage1 = err.error.message;
        this.isSignUpFailed = true;
        console.log(err);
      }
    );
  }

}
