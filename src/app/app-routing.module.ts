import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MassCalculatorComponent } from './mass-calculator/mass-calculator.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path:'', component:MassCalculatorComponent},
  {path:'home', component:HomeComponent},
  {path:'top', component:NavbarComponent},
  {path:'footer', component:FooterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
