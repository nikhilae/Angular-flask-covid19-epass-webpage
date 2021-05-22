import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { NgModule } from '@angular/core';
<<<<<<< HEAD

=======
import { Ng2GoogleChartsModule, GoogleChartsSettings } from 'ng2-google-charts';
>>>>>>> 894bb4131aab135bfaee74744dfdaf68f58a4b59
=======
import { ChartsModule } from 'ng2-charts';
>>>>>>> 153ebf7 (covid epass)
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CountriesComponent } from './components/countries/countries.component';
<<<<<<< HEAD
import {HttpClientModule}  from '@angular/common/http';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component'
import { GoogleChartsModule } from 'angular-google-charts';
<<<<<<< HEAD
=======
import {HttpClientModule} from '@angular/common/http';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component'

>>>>>>> 894bb4131aab135bfaee74744dfdaf68f58a4b59
=======
import { BookingComponent } from './components/booking/booking.component';
import { FormsModule } from '@angular/forms';
import { PassesComponent } from './components/passes/passes.component';

>>>>>>> 153ebf7 (covid epass)
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CountriesComponent,
<<<<<<< HEAD
    DashboardCardComponent
<<<<<<< HEAD
=======
    DashboardCardComponent,
    BookingComponent,
    PassesComponent
    
>>>>>>> 153ebf7 (covid epass)
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    GoogleChartsModule,
    ChartsModule,
    FormsModule
    
=======
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2GoogleChartsModule,
>>>>>>> 894bb4131aab135bfaee74744dfdaf68f58a4b59
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }