import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ContactUsService } from '../contact-us.service';

@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  f_name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';
  mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;


  constructor(public ContactUsService: ContactUsService, public authService: AuthService) { }

  createContactUs() {
    if (this.f_name == "" || this.email == "" || this.subject == "" || this.message == "") {
      alert("Please enter the required details!");
    }
    else if (this.email.match(this.mailformat)){
      this.ContactUsService.createNewContactUs({
        f_name: this.f_name,
        email: this.email,
        subject: this.subject,
        message: this.message,
      }).then(res => {
        console.log(res);
        alert("Your message has been successfully recorded!");
        this.f_name="",
        this.email="",
        this.subject="",
        this.message=""
      }).catch(error => {
        console.log(error);
      });
    }
    else {
      alert("The email address is badly formatted!");
    }
  }

  public user = this.authService.userID;
  viewuser() {
    console.log(this.user);
  }

  ngOnInit(): void {
  }

}
