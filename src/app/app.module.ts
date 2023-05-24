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
import { ServicesComponent } from './pages/services/services.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarAdminComponent } from './components/sidebar-admin/sidebar-admin.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LayoutAdminComponent } from './layout/layout-admin/layout-admin.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { ProductComponent } from './pages/admin/product/product.component';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { TableModule } from 'primeng/table';
import { ScrollerModule } from 'primeng/scroller';
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
    ServicesComponent,
    NotfoundComponent,
    LayoutAdminComponent,
    LayoutComponent,
    HeaderAdminComponent,
    SidebarAdminComponent,
    ProductComponent,
    ProductDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    TableModule,
    ScrollerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
