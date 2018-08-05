import { Component, OnInit } from '@angular/core';
import { FruitService } from './fruit.service';

@Component({
  selector: 'app-fruit',
  template: `
  <div class="container">
      <div class="row">
        <h2>User Details</h2>
        <table class="table table-hover table-striped">
          <thead class="tbl-header">
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ fruit.id }}</td>
              <td>{{ fruit.name }}</td>
              <td>{{ fruit.color }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [`
    .tbl-header {
      background-color: steelblue;
      color: white;
    }
  `],
  providers: [FruitService]
})
export class FruitComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
