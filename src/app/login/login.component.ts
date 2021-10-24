import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/AuthService";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin: any;
  errorMessage: 'Invalid Credentials' | undefined;
  username: any;
  password: any;
  successMessage: any;
  result: any;
  loginSuccess: boolean | undefined;

  handleLogin() {
    this.authService.login(this.username, this.password).subscribe((result) => {
      this.invalidLogin=false;
      this.loginSuccess=true;
      this.successMessage='Login Successfull..!!';
    }, ()=>{
      this.invalidLogin=true;
      this.loginSuccess=false;
    });
  }
constructor(private authService: AuthService) {}
  ngOnInit(): void {
  }

}
