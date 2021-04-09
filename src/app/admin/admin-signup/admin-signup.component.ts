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

  token;
  token1;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public adminSignUpService: AdminSignupService,) {

      let id = this.route.snapshot.paramMap.get('id');
      if (id) this.adminSignUpService.get(id).valueChanges().subscribe(p => this.token1 = p);
  }

  //   AdminLogin()
  // {
  //   this.adminSignUpService.createUser({
  //     token: this.token,
  //   }).then(res => {
  //     console.log(res);
  //   }).catch(error => {
  //     console.log(error);
  //   });
  //  }



  ngOnInit(): void {
  }

  submit() {
    if (this.token != null || this.token !== '') {
      console.log(this.token);
      if (this.token == 'admin123'){
        this.router.navigate(['admin/home']);
      }
      else{
        alert("Incorrect token!");
      }
    }


  }
}
