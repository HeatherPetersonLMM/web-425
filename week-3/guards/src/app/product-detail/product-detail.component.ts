import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  template: `
    <h1 class="product">Product Detail Component</h1>
    <input placeholder="Heather Peterson" type="text" [formControl] = "name">
  `,
  styles: [ `
    .product { background-color: cyan;}
  `
  ]
})
export class ProductDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }}


