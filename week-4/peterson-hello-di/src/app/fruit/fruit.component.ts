import { Component, OnInit } from '@angular/core';
import { FruitService } from './fruit.service';

@Component({
  selector: 'app-fruit',
  template: `
  <div class="container">
      <div class="row">
        <h2>Fruit Details</h2>
        <table class="table table-hover table-striped">
          <thead class="tbl-header">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ Fruit.id }}</td>
              <td>{{ Fruit.name }}</td>
              <td>{{ Fruit.color }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [`
    .tbl-header {
      background-color: coral;
      color: white;
    }
  `],
  providers: [FruitService]
})
export class FruitComponent implements OnInit {


  ngOnInit() {
  }

}
