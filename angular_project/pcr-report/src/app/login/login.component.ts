import { Component, OnInit } from '@angular/core';
import { Login } from '../model/login.model';
import { AuthService } from '../service/auth.service';
import { TokenService } from '../service/token.service';
import { Register } from '../model/Register.model';
import { Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
<<<<<<< HEAD

loginModel: Login = new Login();
  constructor() { }
=======
>>>>>>> ee9cc56503bc1e478dc420ecbb6cbc0e8da4f226

  loginModel: Login = new Login();

  signupModel: Register = new Register();

  constructor(private authService: AuthService, private tokenStorage: TokenService, private router: Router, private act: ActivatedRoute) {
    
  } 

  ngOnInit() {
    document.querySelector('.img-btn').addEventListener('click', function()
	{
		document.querySelector('.cont').classList.toggle('s-signup')
	}
);
  }

<<<<<<< HEAD
=======
  
 
  login(){
    this.router.navigateByUrl('list-car');

  }
    
  signup(){
    this.router.navigateByUrl('new-link');
  }

>>>>>>> ee9cc56503bc1e478dc420ecbb6cbc0e8da4f226
}
