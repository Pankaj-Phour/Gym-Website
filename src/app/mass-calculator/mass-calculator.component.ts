import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mass-calculator',
  templateUrl: './mass-calculator.component.html',
  styleUrls: ['./mass-calculator.component.scss']
})
export class MassCalculatorComponent implements OnInit {
  fatCalculator:FormGroup;
  resultForm:FormGroup;
  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
    this.validation();
  }

  validation(){
    this.fatCalculator = this._fb.group({
      weight:['',Validators.required],
      height:['',Validators.required]
    })

    this.resultForm = this._fb.group({
      result:[{
        value:'',
        disabled:true
      }]
    })
  }

  submit(){
    const height = this.fatCalculator.value.height;
    const weight = this.fatCalculator.value.weight;
    console.log(weight,height,height/100,Math.pow((height/100),2));
    
    const BMI = Math.round(weight/(Math.pow((height/100),2)))
    console.log(BMI);
    this.resultForm.get('result').setValue(BMI);
    setTimeout(() => {
      
      this.fatCalculator.reset();
      this.resultForm.reset();
    }, 3000);
  }

  checkValue(e:any){
    console.log(e.keyCode);
    if((e.keyCode>46 && e.keyCode<58) || (e.keyCode>95 && e.keyCode<106) || e.keyCode===8){

    }
    else{
      e.preventDefault();
    }
    
  }

}
