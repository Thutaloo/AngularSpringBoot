import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  view() {
    this.route.navigate(['view'], { relativeTo: this.activatedRoute });
  }

  edit() {
    this.route.navigate(['edit'], { relativeTo: this.activatedRoute });
  }
}
