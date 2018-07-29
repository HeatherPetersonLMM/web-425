import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productdetail',
  template: `
    <div class="container">
      <div class="row">
        <h2>Welcome to the Home Page!</h2>
      </div>
    </div>
  `,
  styles: [ `
    .container {
      margin-top: 20px;
    }
    h2 {
      color: steelblue;
    }
  `
  ]
})
export class ProductDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }}


