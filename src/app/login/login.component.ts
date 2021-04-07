import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isSignedIn = false
  constructor(public LoginService: LoginService) { }
  ngOnInit() {
    if (localStorage.getItem('user') !== null)
      this.isSignedIn = true
    else{
      alert("Wrong Credentials! Please check again.");
      this.isSignedIn = false
    }
    console.log(this.isSignedIn);
  }
  async onSignup(email: string, password: string) {
    await this.LoginService.signup(email, password)
    if (this.LoginService.isLoggedIn)
      this.isSignedIn = true
  }
  async onSignin(email: string, password: string) {
    await this.LoginService.signin(email, password)
    if (this.LoginService.isLoggedIn)
      this.isSignedIn = true
  }
  handleLogout() {
    this.isSignedIn = false

  }

}



