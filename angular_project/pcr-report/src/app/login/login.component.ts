import { Component, OnInit } from '@angular/core';
import { Login } from '../model/login.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginModel: Login = new Login();
  constructor() { }

  ngOnInit(): void {
  }

  clickSignUp() {
      document.querySelector('.cont').classList.toggle('s-signup');
  }

}
