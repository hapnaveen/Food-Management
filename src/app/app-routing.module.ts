import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
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
    path: 'login',
    component: LoginComponent 
  },
  { 
    path: 'admin/products', 
    component: AdminProductsComponent
  },
  { 
    path: 'admin/orders', 
    component: AdminOrdersComponent 
  },
  { 
    path: 'admin/products/new', 
    component: ProductFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
