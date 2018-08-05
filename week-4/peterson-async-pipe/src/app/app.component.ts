import { Component } from '@angular/core';
import {Fruit} from './fruit';
import {Observable} from 'rxjs';
import {FruitService} from './fruit.service';

@Component({
  selector: 'app-root',
  template: `
  <br /><br />
    <div class="container">
      <div class="row">
        <div class="col">
          <h2>Types of Fruit</h2>
          <div class="table">
          <table class="table table-striped table-dark">
            <thead>
               <th scope="col">ID</th>
               <th scope="col">Name</th>
               <th scope="col">Price</th>
               <th scope="col"Quantity</th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <li *ngFor="let fruit of fruits | async">
              {{ fruit.id }} {{ fruit.name }} {{ fruit.price }} {{ fruit.quantity }}
            </li>
            </tr>
            </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fruits: Observable<Fruit[]>;
  title = 'peterson-async-pipe';

  constructor(private fruitService: FruitService) {}

  AppComponentngOnInit() {
    this.fruits = this.fruitService.getFruits();
  }
}
