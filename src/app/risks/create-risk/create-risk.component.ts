import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-risk',
  templateUrl: './create-risk.component.html',
  styleUrls: ['./create-risk.component.scss']
})
export class CreateRiskComponent implements OnInit {
  public selected = 'none';
  public today: number = Date.now();
  public riskForm: FormGroup;
  public probabilitySub: Subscription;
  public probabilityValue: number = 0;
  public impactSub: Subscription;
  public impactValue: number = 0;
  public ratingValue: number = 0;

  constructor() { }

  ngOnInit() {
    this.riskForm = new FormGroup({
      tag: new FormControl(null, Validators.required),
      dateRaised: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required),
      impact: new FormControl(0),
      probability: new FormControl(0),
      rating: new FormControl(0)


    });

    this.impactSub = this.riskForm.get('impact').valueChanges
    .subscribe(
      (value: number) => {
        this.impactValue = value;
      }
    )

    this.probabilitySub = this.riskForm.get('probability').valueChanges
      .subscribe(
        (value: number) => {
          this.probabilityValue = value;
        }
      );

  }

  onSubmit() {
    console.log(this.riskForm);
    console.log(this.today);
    console.log(this.impactValue);
  }


}




