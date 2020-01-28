import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-risks',
  templateUrl: './risks.component.html',
  styleUrls: ['./risks.component.scss']
})
export class RisksComponent implements OnInit {
  public isLoaded: boolean = false;

  constructor( 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    
  }

  onCreateRisk() {
    if(this.isLoaded) {
      this.isLoaded = false;
    } else {
      this.isLoaded = true;
    }

    setTimeout(delay => {
      this.router.navigate(['/risks/create-risk']);
    }, 500);

    

  }

}
