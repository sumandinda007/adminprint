import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { AddProductComponent } from './catalog/add-product/add-product.component';
import { EditProductComponent } from './catalog/edit-product/edit-product.component';
import { AllProductComponent } from './catalog/all-product/all-product.component';

const approutes: Routes = [
  { path: '', redirectTo:"login", pathMatch: 'full' },
  {path:'login', component:LoginComponent},
  {
    path:'dashboard',
    component: DashboardComponent,
    children:[
      {path:'', redirectTo: 'home', pathMatch:'full'},
      {path:'home', component:DashboardHomeComponent},
      { 
        path: 'catalog', component: CatalogComponent,
        children:[
          {path:'',redirectTo:'allProduct',pathMatch:'prefix'},
          {path:'allProduct',component:AllProductComponent},
          {path:'addProduct', component:AddProductComponent},
          {path:'editProduct/:id', component:EditProductComponent}
        ]
      }
      
    ]
  },
 

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(approutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
