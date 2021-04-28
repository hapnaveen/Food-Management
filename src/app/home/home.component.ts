import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from '../category.service';
import { HomeService } from './home.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output() isLogout = new EventEmitter<void>()

  category;
  email = "undefined";
  public user = this.authService.userID;

  constructor( private homeService: HomeService, public authService: AuthService, private CategoryService: CategoryService, private route: ActivatedRoute, private modalService: NgbModal ) { 
    this.homeService.getAll().subscribe(data => {
      this.category = data.map(e => {
        return {
          id: e.key,
          ...e.payload.val()
        };
      });
    });
    this.email = this.authService.userID;
    console.log(this.email);
  }

  ngOnInit(): void {
    
  }
  

}
