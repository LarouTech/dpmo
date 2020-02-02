import { Injectable } from '@angular/core';
import { Risk } from './risk.model';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RiskService {
  private riskUrl: string = 'api/risks';
  private risks: Risk[];
  public riskChanged = new Subject<Risk[]>();


  constructor(
    private http: HttpClient) {
    this.getRisk()
      .subscribe(
        (value: Risk[]) => {
          this.risks = value;
        }
      )
  }

  createRisk(risk: Risk) {
    this.http.post<Risk>(this.riskUrl, risk)
      .pipe(
        catchError(err => {
          throw 'error in source. Details: ' + err;
        })
      )
      .subscribe(
        (value: Risk) => {
          this.risks.push(risk);
          this.riskChanged.next(this.risks);
        }
      )
  }

  getRisk() {
    return this.http.get<Risk[]>(this.riskUrl);
  }

}
