import { Component, OnInit, OnDestroy } from '@angular/core';
import { SlideInService } from '../slide-in.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public slideSub: Subscription;
  public slideinLeft: boolean;

  constructor(private slideInService: SlideInService) { }

  ngOnInit() {

    this.slideSub = this.slideInService.slideInTogglerChanged
      .subscribe(
        (value: boolean) =>
          this.slideinLeft = value
      );

    this.slideInService.slideInToggler();
  }

  ngOnDestroy() {
    this.slideSub.unsubscribe();
  }

}
