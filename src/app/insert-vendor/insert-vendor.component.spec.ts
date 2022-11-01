import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertVendorComponent } from './insert-vendor.component';

describe('InsertVendorComponent', () => {
  let component: InsertVendorComponent;
  let fixture: ComponentFixture<InsertVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertVendorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
