import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-risk',
  templateUrl: './create-risk.component.html',
  styleUrls: ['./create-risk.component.scss']
})
export class CreateRiskComponent implements OnInit {
  public selected = 'none';
  public today: number = Date.now();
  public riskForm: FormGroup;


  constructor() { }

  ngOnInit() {
    this.riskForm = new FormGroup({
      tag: new FormControl(null, Validators.required),
      dateRaised: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required),
  })
}

  onSubmit() {
    console.log(this.riskForm);
    console.log(this.today);
  }

}
