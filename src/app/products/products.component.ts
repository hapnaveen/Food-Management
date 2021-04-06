import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../category.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products;
  categories = [];
  product: ProductsComponent[];
  category: string;

  constructor(private productService: ProductService, categoryService: CategoryService, private route: ActivatedRoute) {
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
  ngOnInit(): void {
  }

}
