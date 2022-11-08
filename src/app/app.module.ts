import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { VendorServiceService } from './vendor-service.service';
import { InsertVendorComponent } from './insert-vendor/insert-vendor.component';
import { VendorDetailsComponent } from './vendor-details/vendor-details.component';
import { UpdateVendorComponent } from './update-vendor/update-vendor.component';
import { DeleteVendorComponent } from './delete-vendor/delete-vendor.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { ProductComponent } from './product/product.component';
import { EditComponent } from './edit/edit.component';
import { OrderComponent } from './order/order.component';
import { ViewComponent } from './view/view.component';
import { HomeComponent } from './home/home.component';
import { ProductOrdersComponent } from './product-orders/product-orders.component';
import { VendorsComponent } from './vendors/vendors.component';
import { SalesComponent } from './sales/sales.component';
import { OrdersComponent } from './orders/orders.component';
import { AuthenticateGuard } from './authenticate.guard';
import { ChildGuard } from './child.guard';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { CanDeactivateGuard } from './can-deactivate.guard';
import { AdminRoutingModule } from './admin/admin-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    InsertVendorComponent,
    VendorDetailsComponent,
    UpdateVendorComponent,
    DeleteVendorComponent,
    VendorListComponent,
    ProductComponent,
    EditComponent,
    OrderComponent,
    ViewComponent,
    HomeComponent,
    ProductOrdersComponent,
    VendorsComponent,
    SalesComponent,
    OrdersComponent,
    UnauthorizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    , FormsModule
  ],
  providers: [VendorServiceService, AuthenticateGuard, ChildGuard, CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
