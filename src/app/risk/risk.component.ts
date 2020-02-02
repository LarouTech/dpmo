import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RiskService } from './risk.service';
import { Risk } from './risk.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-risks',
  templateUrl: './risk.component.html',
  styleUrls: ['./risk.component.scss']
})
export class RisksComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private riskService: RiskService) { }

  ngOnInit() {
    

  }
}