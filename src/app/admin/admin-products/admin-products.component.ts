import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products;

  constructor(private productService: ProductService) {
    this.productService.getAll().subscribe(data => {
      this.products = data.map(e => {
        return {
          id: e.key,
          ...e.payload.val()
        };
      });

    console.log(this.products)
    });
   }

  ngOnInit(): void {
  }

}
