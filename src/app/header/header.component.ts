import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public menuCollapse: boolean = false;
  public expand: boolean = false;

  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.breakpointObserver
      .observe(['(max-width: 600px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.menuCollapse = true;
        } else {
          this.menuCollapse = false;
          this.expand = false;
        }
      });
  }

  menuExpand() {
    if(this.expand) {
      this.expand = false;
    } else {
      this.expand = true
    }
  }
}