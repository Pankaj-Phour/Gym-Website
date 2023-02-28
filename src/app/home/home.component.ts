import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  classes:any = [
    {name:'Weight Training',image:'/assets/gymB.webp',content:'Weight training is also known as resistance or strength training. It involves moving parts of your body against some kind of resistance, like weights, resistance bands, weight machines, or even your own body weight. Weight training is an excellent way to build muscle mass and make your muscles stronger.'},
    {name:'Weight Training',image:'/assets/gymB.webp',content:'Weight training is also known as resistance or strength training. It involves moving parts of your body against some kind of resistance, like weights, resistance bands, weight machines, or even your own body weight. Weight training is an excellent way to build muscle mass and make your muscles stronger.'},
    {name:'Weight Training',image:'/assets/gymB.webp',content:'Weight training is also known as resistance or strength training. It involves moving parts of your body against some kind of resistance, like weights, resistance bands, weight machines, or even your own body weight. Weight training is an excellent way to build muscle mass and make your muscles stronger.'},
    {name:'Weight Training',image:'/assets/gymB.webp',content:'Weight training is also known as resistance or strength training. It involves moving parts of your body against some kind of resistance, like weights, resistance bands, weight machines, or even your own body weight. Weight training is an excellent way to build muscle mass and make your muscles stronger.'},
    {name:'Weight Training',image:'/assets/gymB.webp',content:'Weight training is also known as resistance or strength training. It involves moving parts of your body against some kind of resistance, like weights, resistance bands, weight machines, or even your own body weight. Weight training is an excellent way to build muscle mass and make your muscles stronger.'},
    {name:'Weight Training',image:'/assets/gymB.webp',content:'Weight training is also known as resistance or strength training. It involves moving parts of your body against some kind of resistance, like weights, resistance bands, weight machines, or even your own body weight. Weight training is an excellent way to build muscle mass and make your muscles stronger.'},
];
  constructor() { }

  ngOnInit(): void {
  }

}
