import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as $ from 'jquery';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { AddProductComponent } from './catalog/add-product/add-product.component';
import { EditProductComponent } from './catalog/edit-product/edit-product.component';
import { AllProductComponent } from './catalog/all-product/all-product.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    DashboardHomeComponent,
    CatalogComponent,
    AddProductComponent,
    EditProductComponent,
    AllProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule
  ],
  exports: [
    DashboardHomeComponent,
    CatalogComponent 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
