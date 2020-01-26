import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SlideInService {
  slideInTogglerChanged = new Subject<boolean>();
  slideInLeft: boolean = true;

  constructor() { }


  slideInToggler () {
    if(this.slideInLeft) {
      this.slideInLeft = false;
    } else {
      this.slideInLeft = true;
    }
    this.slideInTogglerChanged.next(this.slideInLeft);
  }

}
