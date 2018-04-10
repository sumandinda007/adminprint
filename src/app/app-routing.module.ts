import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { CatalogComponent } from './catalog/catalog.component';

const approutes: Routes = [
  { path: '', redirectTo:"login", pathMatch: 'full' },
  {path:'login', component:LoginComponent},
  {
    path:'dashboard',
    component: DashboardComponent,
    children:[
      {path:'', redirectTo: 'home', pathMatch:'full'},
      {path:'home', component:DashboardHomeComponent},
      { path: 'catalog', component: CatalogComponent}
      
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
