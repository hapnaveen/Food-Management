import { Component, OnInit } from '@angular/core';
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

  constructor(public ContactUsService: ContactUsService) { }

  createContactUs()
  {
    this.ContactUsService.createNewContactUs({
      f_name: this.f_name,
      email: this.email,
      subject: this.subject,
      messege: this.message,
    }).then(res => {
      console.log(res);
      alert("Your messege has been successfully recorded!");
    }).catch(error => {
      console.log(error);
    });
  }

  ngOnInit(): void {
  }

}
