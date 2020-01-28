import { Injectable } from '@angular/core';
import { Risk } from './risks/risk.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  createDb() {
    const risks = [{
      _id: 1,
      dateRaised: Date.now(),
      description: 'What a shit show',
      category: 'resource'
    }];
    return {risks};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(risks: Risk[]): number {
    return risks.length > 0 ? Math.max(...risks.map(risk => risk._id)) + 1 : 11;
  }
}