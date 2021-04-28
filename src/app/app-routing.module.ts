import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminContactComponent } from './admin/admin-contact/admin-contact.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminSignupComponent } from './admin/admin-signup/admin-signup.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { NavbarBfComponent } from './navbar-bf/navbar-bf.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  { 
    path: 'home', 
    component: HomeComponent
  },
  { 
    path: 'product', 
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
  { 
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full'
  },
  { 
    path: 'sign-in', 
    component: SignInComponent
  },
  { 
    path: 'register-user', 
    component: SignUpComponent
  },
  {
    path: 'admin/signup',
    component: AdminSignupComponent
  },
  {
    path: 'admin/home',
    component: AdminHomeComponent
  },
  { 
    path: 'navbar-bf', 
    component: NavbarBfComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
