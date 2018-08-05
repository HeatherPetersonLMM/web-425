import { Injectable } from '@angular/core';
import {Fruit} from './fruit';
import {Observable} from 'rxjs';
import { of } from 'rxjs';

@Injectable()
export class FruitService {

  fruits: Fruit[] = [
    { id: 11, name: 'Grapes', pricePerPound: '6.99', quantity: 12},
    { id: 12, name: 'Oranges', pricePerPound: '5.99', quantity: 15},
    { id: 13, name: 'Kiwi', pricePerPound: '7.99', quantity: 10},
    { id: 14, name: 'Bananas', pricePerPound: '3.99', quantity: 15},
    { id: 15, name: 'Lemons', pricePerPound: '6.99', quantity: 12},
  ];

  constructor() { }

  getFruits(): Observable<Fruit[]> {
    return of(this.fruits);
  }
}
