import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FruitService } from './fruit.service';
import { Fruit } from './fruit';

@Component({
  selector: 'app-root',
  template: `
  <br/><br/><br/>
    <div class="container">
      <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Price Per Pound</th>
          <th scope="col">Number</th>
        </tr>
      </thead>
        <tbody>
          <tr *ngFor="let fruit of fruits | async">
            <td>{{fruit.id}}</td>
            <td>{{fruit.name}}</td>
            <td>{{fruit.pricePerPound}}</td>
            <td>{{fruit.quantity}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fruits: Observable<Fruit[]>;
  constructor(private fruitService: FruitService) {}

  ngOnInit() {
    this.fruits = this.fruitService.getFruits();
}
}
