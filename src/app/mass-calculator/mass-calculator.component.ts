import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mass-calculator',
  templateUrl: './mass-calculator.component.html',
  styleUrls: ['./mass-calculator.component.scss']
})
export class MassCalculatorComponent implements OnInit {
  fatCalculator:FormGroup;
  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
  }

  validation(){
    this.fatCalculator = this._fb.group({
      weight:['',Validators.required],
      height:['',Validators.required]
    })
  }

}
