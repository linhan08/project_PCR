import { Component, OnInit } from '@angular/core';
import { Register } from '../model/register.model';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signModel: Register = new Register();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  signup() {
    this.authService.register(this.signModel).subscribe(data => {
      console.log(data);
    
    }, err => {
      console.log(err);
    });
  }

}
