import { Component, OnInit } from '@angular/core';
import { ContactUsService } from 'src/app/contact-us.service';

@Component({
  selector: 'app-admin-contact',
  templateUrl: './admin-contact.component.html',
  styleUrls: ['./admin-contact.component.css']
})
export class AdminContactComponent implements OnInit {
  Messages;

  constructor(private ContactUsService: ContactUsService) {
    this.ContactUsService.getAll().subscribe(data => {
      this.Messages = data.map(e => {
        return {
          id: e.key,
          ...e.payload.val()
        };
      });

    console.log(this.Messages)
    });
   }
  ngOnInit(): void {
  }

}
