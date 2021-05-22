import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CountriesComponent } from './components/countries/countries.component';
<<<<<<< HEAD
import {BookingComponent} from './components/booking/booking.component';
import {PassesComponent} from './components/passes/passes.component';
//import { AppComponent } from './app.component';
//import { FormsModule } from '@angular/platform-browser';
=======
import {BookingComponent} from './components/booking/booking.component'
import {PassesComponent} from './components/passes/passes.component'
>>>>>>> 1232a84 (Manually merged upstream update)
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
