import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/category.service';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories = [];
  product;
  title: string = '';
  price: Number = 0;
  category: string = '';
  imageUrl: string = '';

  constructor(private router: Router, categoryService: CategoryService, public productService: ProductService, private route: ActivatedRoute) {

    
     let id=this.route.snapshot.paramMap.get('id');
     console.log(id);
     if (id) this.productService.get(id).valueChanges().subscribe(p =>this.product = p);
    
     categoryService.getCategories().then(docs => {
       docs.forEach(doc => {
         this.categories.push(doc.val().name);
       });
       console.log(this.categories);
     })

  // }

  // save(product){
  //   this.productService.create(product);
  //   this.router.navigate(['/admin/products']);

    
     
  }

  CreateProduct()
  {
    this.productService.createNewProduct({
      title: this.title,
      price: this.price,
      category: this.category,
      imageUrl: this.imageUrl,
    }).then(res => {
      console.log(res);
      alert("Product has been succesfully uploaded");
    }).catch(error => {
      console.log(error);
    });
  }


  

  ngOnInit(): void {
  }

}
