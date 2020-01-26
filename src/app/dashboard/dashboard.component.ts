import { Component, OnInit } from '@angular/core';
import { SlideInService } from '../slide-in.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
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
