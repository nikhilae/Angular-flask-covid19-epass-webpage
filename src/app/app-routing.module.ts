import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CountriesComponent } from './components/countries/countries.component';
import {BookingComponent} from './components/booking/booking.component';
import {PassesComponent} from './components/passes/passes.component';
//import { AppComponent } from './app.component';
//import { FormsModule } from '@angular/platform-browser';
const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path : 'countries' , component :CountriesComponent } ,
  {path : 'booking',component:BookingComponent},
  {path: 'passes',component:PassesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
