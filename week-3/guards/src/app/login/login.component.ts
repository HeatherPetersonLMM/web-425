import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
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
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }}

