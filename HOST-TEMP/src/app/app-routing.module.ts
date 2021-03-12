import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { OurServicesComponent } from './our-services/our-services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
   {path:'home',component:HomeComponent},
   {path:'products',component:ProductsComponent},
   {path:'ourServices',component:OurServicesComponent},
   {path:'contactUs',component:ContactUsComponent},
   {path:'portfolio',component:PortfolioComponent},
    {path:'',redirectTo:'/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
