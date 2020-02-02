import { Component, OnInit, OnDestroy } from '@angular/core';
import { RiskService } from '../risk.service';
import { Risk } from '../risk.model';
import { DataSource } from '@angular/cdk/collections';
import { Observable, Subject } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-risk-log',
  templateUrl: './risk-log.component.html',
  styleUrls: ['./risk-log.component.scss']
})
export class RiskLogComponent implements OnInit, OnDestroy {
  public risks: Risk[];
  dataSource = new MatTableDataSource<Risk>([]);
  risksSubject = new Subject<any>();

  tableColumns: string[] = ['_id','owner','dateRaised', 'category', 'probability', 'impact', 'rating'];

  constructor(private riskService: RiskService) {
  }

  ngOnInit() {
    this.riskService.getRisk()
    .subscribe(
      (value: Risk[]) => {
        this.dataSource.data = value;
        console.log(this.dataSource);
      }
    );

    this.riskService.riskChanged
      .subscribe(
        (value: Risk[]) => {
          this.risks = value;
          this.dataSource.data = value;
        }
      );
  
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy() {
  }
}





