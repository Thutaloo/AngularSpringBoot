import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from './can-deactivate.guard';
import { ChildGuard } from './child.guard';
import { DeleteVendorComponent } from './delete-vendor/delete-vendor.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { InsertVendorComponent } from './insert-vendor/insert-vendor.component';
import { OrderComponent } from './order/order.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductOrdersComponent } from './product-orders/product-orders.component';
import { ProductComponent } from './product/product.component';
import { SalesComponent } from './sales/sales.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { UpdateVendorComponent } from './update-vendor/update-vendor.component';
import { VendorDetailsComponent } from './vendor-details/vendor-details.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { VendorsComponent } from './vendors/vendors.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: "vendors", component: VendorListComponent },
  { path: "vendorDetails/:vendorID", component: VendorDetailsComponent },
  { path: "create", component: InsertVendorComponent, canDeactivate: [CanDeactivateGuard] },
  { path: "update/:vendorID", component: UpdateVendorComponent },
  { path: "delete/:vendorID", component: DeleteVendorComponent },
  { path: "home", component: HomeComponent },
  { path: "order", children: [{ path: "productOrder", component: ProductOrdersComponent }], component: OrderComponent },
  {
    path: "product", children: [{ path: "view", component: ViewComponent },
    { path: "edit", component: EditComponent },]
    , component: ProductComponent, canActivateChild: [ChildGuard]
  },
  {
    path: "sales", children:
      [{ path: "orders", component: OrdersComponent, outlet: "ordersRoute" },
      { path: "vendors", component: VendorsComponent, outlet: "vendorsRoute" }],
    component: SalesComponent
  },
  { path: "", redirectTo: "vendors", pathMatch: "full" },
  { path: "unauthorized", component: UnauthorizedComponent },
  { path: "Admin", loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
