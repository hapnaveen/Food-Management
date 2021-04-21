import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddToCartService } from '../add-to-cart.service';
import { AuthService } from '../auth.service';
import { CategoryService } from '../category.service';
import { ProductService } from '../product.service';


@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  styles: [`
  .dark-modal .modal-content {
    background-color: #292b2c;
    color: white;
  }
  .dark-modal .close {
    color: white;
  }
  .light-blue-backdrop {
    background-color: #5cb3fd;
  }
`]
})
export class ProductsComponent implements OnInit {

  products;
  categories = [];
  product: ProductsComponent[];
  category: string;
  public user = this.authService.userID;
  cart_title = 0;
  cart_price: Number;
  cart_category: string;
  cart_imageUrl: string;
  closeResult: string;

  constructor(private productService: ProductService, categoryService: CategoryService, private route: ActivatedRoute, public authService: AuthService, public addToCartService: AddToCartService, private modalService: NgbModal) {
    this.productService.getAll().subscribe(data => {
      this.products = data.map(e => {
        return {
          id: e.key,
          ...e.payload.val()
        };
      });

    console.log(this.products)
    });
   
    categoryService.getCategories().then(docs => {
      docs.forEach(doc => {
        this.categories.push(doc.val().name);
      });
      console.log(this.categories);
    })

    route.queryParamMap.subscribe(params => {
      this.category = params.get('category');
    })

  }

  addCart(title,price,category,imageUrl)
  {
    this.cart_title = title;
    this.cart_price = price;
    this.cart_category = category;
    this.cart_imageUrl = imageUrl;
    this.addToCartService.addToCart({
      userID: this.user,
      cart_title: this.cart_title,
      cart_price: this.cart_price,
      cart_category: this.cart_category,
      cart_imageUrl: this.cart_imageUrl
    }).then(res => {
      console.log(res);
      alert("Your product has been successfully recorded!");
    }).catch(error => {
      console.log(error);
    });
  }

  ngOnInit(): void {
  }


  
}
