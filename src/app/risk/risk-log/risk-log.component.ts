import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { RiskService } from '../risk.service';
import { Risk } from '../risk.model';
import { DataSource } from '@angular/cdk/collections';
import { Observable, Subject } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-risk-log',
  templateUrl: './risk-log.component.html',
  styleUrls: ['./risk-log.component.scss']
})
export class RiskLogComponent implements OnInit, OnDestroy {
  public risks: Risk[];
  dataSource = new MatTableDataSource<Risk>([]);
  risksSubject = new Subject<any>();
  public page: number = 1;

  tableColumns: string[] = ['_id','owner','dateRaised', 'category', 'probability', 'impact', 'rating'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

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

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy() {
  }
}





