import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
  <h1 class="product">Login Component</h1>
  <input placeholder="Heather Peterson" type="text" [formControl] = "name">
`,
styles: [ `
  .product { background-color: cyan;}
`
]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }}

