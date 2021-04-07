import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output() isLogout = new EventEmitter<void>()

  constructor(public firebaseService: LoginService) { }

  ngOnInit(): void {
  }
  
  logout(){
    this.firebaseService.logout()
    this.isLogout.emit()
  }

}
