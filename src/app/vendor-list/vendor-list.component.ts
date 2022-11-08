import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from '../Vendor';
import { VendorServiceService } from '../vendor-service.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {
  vendors: Vendor[];
  constructor(private service: VendorServiceService, private route: Router) { }

  ngOnInit(): void {
    this.getVendors();
  }

  getVendors() {
    this.service.getVendors().subscribe(data => this.vendors = data);
  }

  createVendor(){
    this.route.navigate([`/create`]);

  }
  updateVendor(vendorID: number) {
    this.route.navigate([`/update`, vendorID]);
  }

  deleteVendor(vendorID: number) {
    this.route.navigate([`/delete`, vendorID]);
  }

  viewVendor(vendorID: number) {
    this.route.navigate([`/vendorDetails`, vendorID]);
  }
}
