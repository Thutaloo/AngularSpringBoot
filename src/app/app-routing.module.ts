import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteVendorComponent } from './delete-vendor/delete-vendor.component';
import { InsertVendorComponent } from './insert-vendor/insert-vendor.component';
import { UpdateVendorComponent } from './update-vendor/update-vendor.component';
import { VendorDetailsComponent } from './vendor-details/vendor-details.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';

const routes: Routes = [
  { path: "vendors", component: VendorListComponent },
  { path: "vendorDetails/:vendorID", component: VendorDetailsComponent },
  { path: "", redirectTo: "vendors", pathMatch: "full" },
  { path: "insert", component: InsertVendorComponent },
  { path: "update/:vendorID", component: UpdateVendorComponent },
  { path: "delete/:vendorID", component: DeleteVendorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
