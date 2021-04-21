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


  constructor(public ContactUsService: ContactUsService, public authService: AuthService) {  }

  createContactUs()
  {
    this.ContactUsService.createNewContactUs({
      f_name: this.f_name,
      email: this.email,
      subject: this.subject,
      message: this.message,
    }).then(res => {
      console.log(res);
      alert("Your message has been successfully recorded!");
    }).catch(error => {
      console.log(error);
    });
  }

  public user = this.authService.userID;
  viewuser(){
    console.log(this.user);
  }

  ngOnInit(): void {
  }
  
}
