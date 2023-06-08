import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { CategoryComponent } from './category/category.component';
import { AboutComponent } from './pages/about/about.component';
import { RegisterComponent } from './pages/register/register.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarAdminComponent } from './components/sidebar-admin/sidebar-admin.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LayoutAdminComponent } from './layout/layout-admin/layout-admin.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { ProductComponent } from './pages/admin/product/product.component';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';

import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { TableModule } from 'primeng/table';
import { ScrollerModule } from 'primeng/scroller';
import {StyleClassModule} from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './pages/admin/add-product/add-product.component';
import { UpdateProductComponent } from './pages/admin/update-product/update-product.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

import { PaginatorModule } from 'primeng/paginator';
import { CartComponent } from './pages/cart/cart.component';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ThanhtoanComponent } from './pages/thanhtoan/thanhtoan.component';
import { NgxPayPalModule } from 'ngx-paypal';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    CategoryComponent,
    AboutComponent,
    RegisterComponent,
    NotfoundComponent,
    LayoutAdminComponent,
    LayoutComponent,
    HeaderAdminComponent,
    SidebarAdminComponent,
    ProductComponent,
    ProductDetailComponent,
    DashboardComponent,
    AddProductComponent,
    UpdateProductComponent,
    CartComponent,
    ThanhtoanComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    TableModule,
    ScrollerModule,
    StyleClassModule,
    CheckboxModule,
    InputTextModule,
    RadioButtonModule,
    ButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    PaginatorModule,
    NgxPaginationModule,
    AvatarModule,
    BadgeModule,
    NgxPayPalModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
