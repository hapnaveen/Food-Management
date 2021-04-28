import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  email = "undefined";
  public user = this.authService.userID;
  
  constructor(public authService: AuthService) { 
    this.email = this.authService.userID;
  }

  ngOnInit(): void {
  }

}
