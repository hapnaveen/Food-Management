import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddToCartService } from '../add-to-cart.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  Cart;
  public user = this.authService.userID;

  constructor(private route: ActivatedRoute, public authService: AuthService, public addToCartService: AddToCartService) { 
    this.addToCartService.getAll().subscribe(data => {
      this.Cart = data.map(e => {
        return {
          id: e.key,
          ...e.payload.val()
        };
      });

    console.log(this.Cart)
    });
  }

  ngOnInit(): void {
  }

}
