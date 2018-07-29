import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <h1 class="product">Home Component</h1>
  <input placeholder="Heather Petreson" type="text" [formControl] = "name">
`,
styles: [ `
  .product { background-color: cyan;}
`
]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }}

