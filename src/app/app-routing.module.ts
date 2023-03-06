import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MassCalculatorComponent } from './mass-calculator/mass-calculator.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path:'BMI', component:MassCalculatorComponent},
  {path:'', component:HomeComponent},
  {path:'top', component:NavbarComponent},
  {path:'footer', component:FooterComponent},

];

@NgModule({
  // Added hashrouting to load pages on different paths on server 
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
