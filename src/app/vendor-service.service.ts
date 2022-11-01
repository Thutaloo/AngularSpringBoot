import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from './Vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorServiceService {
  private baseURL = "http://localhost:9090/";
  constructor(private http: HttpClient) { }

  getVendors(): Observable<Vendor[]> {
    return this.http.get<Vendor[]>(this.baseURL + "getAllVendorsDAO");
  }

  getVendorByID(vendorID: number): Observable<Vendor> {
    return this.http.get<Vendor>(this.baseURL + "getByID/" + vendorID);
  }

  addVendor(vendor: Vendor): Observable<string> {
    return this.http.post<string>(this.baseURL + "addVendor", vendor);
  }

  updateVendor(vendorID: number, vendor: Vendor): Observable<string> {
    return this.http.put<string>(this.baseURL + "updateVendorDAO/" + vendorID, vendor);
  }

  deleteVendor(vendorID: number): Observable<string> {
    return this.http.delete<string>(this.baseURL + "deleteVendorDAO/" + vendorID);
  }
}
