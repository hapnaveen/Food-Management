import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminContactComponent } from './admin/admin-contact/admin-contact.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent
  },
  { 
    path: 'products', 
    component: ProductsComponent 
  },
  { 
    path: 'shopping-cart', 
    component: ShoppingCartComponent
  },
  { 
    path: 'check-out', 
    component: CheckOutComponent
  },
  { 
    path: 'about-us', 
    component: AboutUsComponent
  },
  { 
    path: 'order-success', 
    component: OrderSuccessComponent 
  },
  { 
    path: 'my-orders', 
    component: MyOrdersComponent 
  },
  { 
    path: 'login',
    component: LoginComponent 
  },
  { 
    path: 'admin/orders', 
    component: AdminOrdersComponent 
  },
  { 
    path: 'admin/products/new', 
    component: ProductFormComponent
  },
  { 
    path: 'admin/products/:id', 
    component: ProductFormComponent
  },
  { 
    path: 'admin/products', 
    component: AdminProductsComponent
  },
  { 
    path: 'contact-us',
    component: ContactUsComponent 
  },
  { 
    path: 'admin/contact', 
    component: AdminContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
