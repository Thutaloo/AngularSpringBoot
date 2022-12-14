import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../Vendor';
import { VendorServiceService } from '../vendor-service.service';

@Component({
  selector: 'app-update-vendor',
  templateUrl: './update-vendor.component.html',
  styleUrls: ['./update-vendor.component.css']
})
export class UpdateVendorComponent implements OnInit {
  vendorID: number;
  vendor: Vendor = new Vendor();
  message: string;
  constructor(private service: VendorServiceService, private activatedRoute: ActivatedRoute, private route: Router) { }

  // http://localhost:64827/update/1
  // Will fetch 1 from URL
  ngOnInit(): void {
    this.vendorID = this.activatedRoute.snapshot.params[`vendorID`];
    this.service.getVendorByID(this.vendorID).subscribe(data => { this.vendor = data });
  }

  onSubmit() {
    this.service.updateVendor(this.vendorID, this.vendor).subscribe(data => { this.message = data});
    this.route.navigate(['vendors']).then(() => { window.location.reload(); }); //Same as in app-routing.module
    // alert(this.message);
  }
}