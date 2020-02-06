import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription, Subject } from 'rxjs';
import { Risk } from '../risk.model';
import { RiskService } from '../risk.service';

@Component({
  selector: 'app-create-risk',
  templateUrl: './create-risk.component.html',
  styleUrls: ['./create-risk.component.scss']
})
export class CreateRiskComponent implements OnInit, OnDestroy {
  public selected = 'none';
  public today: number = Date.now();
  public riskForm: FormGroup;

  public probabilityValue: number = 0;
  public impactValue: number = 0;
  public ratingValue: number = 0;

  public inherentProbabilityValue: number = 0;
  public inherentImpactValue: number = 0;
  public inherentRatingValue: number = 0;

  private riskFormSub: Subscription;
  public isMitigate: boolean = false;
  private isMitigateChanged = new Subject<boolean>();
  private isMitigateSub: Subscription;

  public risk: Risk;
  private id: number = 5;
  public risks: Risk[];

  public canvasWidth = 200;
  public needleValue = 0;
  public inherentNeedleValue = 0;

  public centralLabel: string = '0%'
  public inherentCentralLabel: string = '0%'


  public options = {
    hasNeedle: true,
    needleColor: 'gray',
    needleUpdateSpeed: 500,
    arcColors: ['#3F51B5', 'lightgray'],
    arcDelimiters: [33, 66],
    needleStartValue: this.ratingValue,
  }

  public inherentOptions = {
    hasNeedle: true,
    needleColor: 'gray',
    needleUpdateSpeed: 500,
    arcColors: ['#3F51B5', 'lightgray'],
    arcDelimiters: [33, 66],
    needleStartValue: this.inherentRatingValue,
  }

  constructor(private riskService: RiskService) {
    this.probabilityValue = 0;
    this.impactValue = 0;
  }

  ngOnInit() {
    this.riskForm = new FormGroup({
      owner: new FormControl(null, Validators.required),
      dateRaised: new FormControl(new Date, Validators.required),
      description: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required),
      impact: new FormControl(0),
      probability: new FormControl(0),
      rating: new FormControl(this.ratingValue),
      riskStrategy: new FormControl(null),
      responseDate: new FormControl(null),
      riskResponse: new FormControl(null),
      riskNotes: new FormControl(null),
      inherentImpact: new FormControl(0),
      inherentProbability: new FormControl(0),
      inherentRating: new FormControl(this.inherentRatingValue),

    });

    this.riskFormSub = this.riskForm.valueChanges
      .subscribe(
        (value) => {
          this.ratingValue = Math.round((value.probability + value.impact) / 2);
          this.impactValue = value.impact;
          this.probabilityValue = value.probability;
          this.needleValue = this.ratingValue;
          this.centralLabel = `${this.ratingValue}%`;
          this.options.needleStartValue = this.ratingValue;

          this.inherentRatingValue = Math.round((value.inherentProbability + value.inherentImpact) / 2);
          this.inherentImpactValue = value.inherentImpact;
          this.inherentProbabilityValue = value.inherentProbability;
          this.inherentNeedleValue = this.inherentRatingValue;
          this.inherentCentralLabel = `${this.inherentRatingValue}%`;
          this.inherentOptions.needleStartValue = this.inherentRatingValue;
        }
      );

      this.isMitigateSub = this.isMitigateChanged
      .subscribe(
        (value: boolean) => {
          this.isMitigate = value;
        }
      )
  }

  onSubmit() {
    this.risk = {
      _id: this.id + 1,
      owner: this.riskForm.get('owner').value,
      dateRaised: this.riskForm.get('dateRaised').value,
      description: this.riskForm.get('description').value,
      category: this.riskForm.get('category').value,
      impact: this.riskForm.get('impact').value,
      probability: this.riskForm.get('probability').value,
      rating: this.ratingValue,
      riskStrategy: this.riskForm.get('riskStrategy').value,
      responseDate: this.riskForm.get('responseDate').value,
      riskResponse: this.riskForm.get('riskResponse').value,
      riskNotes: this.riskForm.get('riskNotes').value,
      inherentImpact: this.riskForm.get('inherentImpact').value,
      inherentProbability: this.riskForm.get('inherentProbability').value,
      inherentRating: this.inherentRatingValue
    }
    this.riskService.createRisk(this.risk);
    this.id = this.id + 1;
    this.riskForm.reset();
  }

  onMitigate() {

      if(!this.isMitigate) {
        this.isMitigate = true;
        this.isMitigateChanged.next(this.isMitigate);
      } else {
        this.isMitigate = false;
        this.isMitigateChanged.next(this.isMitigate)
      }


  }

  ngOnDestroy() {
    this.riskFormSub.unsubscribe();
    this.isMitigateSub.unsubscribe();
  }

}




