import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminSignupService } from './admin-signup.service';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent implements OnInit {

  // token;
  // token1;

  // constructor(
  //   private router: Router,
  //   private route: ActivatedRoute,
  //   public adminSignUpService: AdminSignupService,) {

  //     let id = this.route.snapshot.paramMap.get('id');
  //     if (id) this.adminSignUpService.get(id).valueChanges().subscribe(p => this.token1 = p);
  // }

  Admins;
  token_store : string;
  token_get : string;

  constructor(private route: ActivatedRoute, private router: Router, public AdminSignupService: AdminSignupService) { 
    this.AdminSignupService.getAll().subscribe(data => {
      this.Admins = data.map(e => {
        return {
          id: e.key,
          ...e.payload.val()
        };
      });
    });
  }
  ngOnInit(): void {
  }

  // submit() {
  //   if (this.token != null || this.token !== '') {
  //     console.log(this.token);
  //     if (this.token == 'admin123'){
  //       this.router.navigate(['admin/home']);
  //     }
  //     else{
  //       alert("Incorrect token!");
  //     }
  //   }


  // }

  
  submit(token2) {
    this.token_store = token2;
    if (this.AdminSignupService.token === this.token_store) {
            this.router.navigate(['admin/orders']);
          }
          else{
            alert("Incorrect token!");
          }


  }
  }

