import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../Vendor';
import { VendorServiceService } from '../vendor-service.service';

@Component({
  selector: 'app-delete-vendor',
  templateUrl: './delete-vendor.component.html',
  styleUrls: ['./delete-vendor.component.css']
})
export class DeleteVendorComponent implements OnInit {
  vendorID: number;
  vendor: Vendor = new Vendor();
  message: string;

  constructor(private service: VendorServiceService, private activatedRoute: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.vendorID = this.activatedRoute.snapshot.params[`vendorID`];
    this.service.getVendorByID(this.vendorID).subscribe(data => { this.vendor = data });
  }

  onSubmit() {
    var confirmation = confirm("Do you want to delete vendor: " + this.vendor.name);

    if (confirmation) {
      this.service.deleteVendor(this.vendorID).subscribe(data => { this.message = data });
    }

    this.route.navigate(['vendors']).then(() => { window.location.reload(); }); //Same as in app-routing.module
    // alert(this.message);
  }

}
