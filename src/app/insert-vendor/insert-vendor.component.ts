import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from '../Vendor';
import { VendorServiceService } from '../vendor-service.service';

@Component({
  selector: 'app-insert-vendor',
  templateUrl: './insert-vendor.component.html',
  styleUrls: ['./insert-vendor.component.css']
})
export class InsertVendorComponent implements OnInit {

  vendor: Vendor = new Vendor();
  message: string;
  isDirty = true;

  constructor(private service: VendorServiceService, private route: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.addVendor(this.vendor).subscribe(data => this.message = data);
    this.route.navigate(['vendors']).then(() => { window.location.reload(); });
  }

}
