import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddToCartService } from 'src/app/add-to-cart.service';

@Component({
  selector: 'admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {


  admin_orders;

  constructor(private route: ActivatedRoute, public addToCartService: AddToCartService) { 
    this.addToCartService.getAll().subscribe(data => {
      this.admin_orders = data.map(e => {
        return {
          id: e.key,
          ...e.payload.val()
        };
      });

    console.log(this.admin_orders)
    });
  }

  ngOnInit(): void {
  }

}
