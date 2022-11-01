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

@NgModule({
  declarations: [
    AppComponent,
    InsertVendorComponent,
    VendorDetailsComponent,
    UpdateVendorComponent,
    DeleteVendorComponent,
    VendorListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    , FormsModule
  ],
  providers: [VendorServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
