import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/category.service';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories = [];
  
  constructor(private router: Router, categoryService: CategoryService, private productService: ProductService) {
    categoryService.getCategories().then(docs => {
      docs.forEach(doc => {
        this.categories.push(doc.val().name);
      });
      console.log(this.categories);
    })
  }

  save(product){
    this.productService.create(product);
    this.router.navigate(['/admin/products']);
  }

  ngOnInit(): void {
  }

}
