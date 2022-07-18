import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SbarComponent } from './components/sbar/sbar.component';
import { FlightsComponent } from './components/flights/flights.component';
import { FlightComponent } from './components/flight/flight.component';
import { FlightbookComponent } from './components/flightbook/flightbook.component';
import { FooterComponent } from './components/footer/footer.component';



const routesModule: Routes=[{
  path:'', component: SbarComponent
},{
  path:'flights', component:FlightsComponent
},{
  path:'flights/:flightId', component: FlightbookComponent
}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SbarComponent,
    FlightsComponent,
    FlightComponent,
    FlightbookComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routesModule),
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
