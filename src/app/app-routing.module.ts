import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminGuard } from './services/admin.guard';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { NormalGuard } from './services/normal.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginforgetpasswordComponent } from './pages/loginforgetpassword/loginforgetpassword.component';
import { VerificationComponent } from './pages/verification/verification.component';
import { PostCategoryComponent } from './components/post-category/post-category.component';
import { PostAbonnementComponent } from './components/post-abonnement/post-abonnement.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UpdateAbonnementComponent } from './components/update-abonnement/update-abonnement.component';
import { CustomerComponent } from './customer/customer.component';
import { DashboardComponent } from './customer/components/dabhoard/dashboard/dashboard.component';
import { CartComponent } from './customer/components/cart/cart.component';
import { PostCouponComponent } from './components/post-coupon/post-coupon.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { OrdersComponent } from './components/orders/orders.component';
import { MyOrdersComponent } from './customer/components/my-orders/my-orders.component';
import { PostAbonnementFaqComponent } from './customer/components/post-abonnement-faq/post-abonnement-faq.component';
const routes: Routes = [
  {
    path:'signup',
    component : SignupComponent,
    pathMatch: 'full',
  },
  {
    path:'login',
    component : LoginComponent,
    
  },
  { path: 'forgetpassword', component: LoginforgetpasswordComponent},
  { path: 'verification', component: VerificationComponent},
  {
    path:"admin",
    component : AllTemplateBackComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path:'category',
        component:PostCategoryComponent
      },
      {
        path:'abonnement',
        component:PostAbonnementComponent
      },
      {
        path:'abonnement/:abonnementId',
        component:UpdateAbonnementComponent
      },
      {
        path:'dashboard',
        component:NavbarComponent
      },
      {
        path:'post-coupon',
        component:PostCouponComponent
      },
      {
        path:'coupons',
        component:CouponsComponent
      },

      {
        path:'orders',
        component:OrdersComponent
      },
      
      {
        path:'faq/:abonnementId',
        component:PostAbonnementFaqComponent
      },
    
    
      

    ]
  },
  /*{
    path:'user-dashboard',
    component : UserDashboardComponent,
    pathMatch:'full',
    canActivate: [NormalGuard],
  },*/
  {
    path:'customer',
    component : DashboardComponent,
    canActivate:[NormalGuard],
     /* children:[
      {
        path:'cart',
        component:CartComponent
      },
    ] */
  
  },
  {
    path:'customer/cart',
    canActivate:[NormalGuard],
    component : CartComponent,
     /* children:[
      {
        path:'cart',
        component:CartComponent
      },
    ] */
  
  },
  {
    path:'customer/my_orders',
    component : MyOrdersComponent,
    canActivate:[NormalGuard],
    
     /* children:[
      {
        path:'cart',
        component:CartComponent
      },
    ] */
  
  },

  {path:"",
  component: AllTemplateFrontComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
