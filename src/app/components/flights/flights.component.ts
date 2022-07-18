import { Component, OnInit } from '@angular/core';
import { Fly } from 'src/app/fly';
import { FlightsApiConService } from 'src/app/services/flights-api-con.service';



@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})


export class FlightsComponent implements OnInit {
   flightsArray:Fly[]
  constructor(private flightsService:FlightsApiConService) { }

  ngOnInit(): void {
    this.flightsService.getFlights().subscribe((flights)=>this.flightsArray = flights.sort(this.sortArray))
  }

  sortArray(a:Fly,b:Fly) {
    return new Date(a.zi).getTime() - new Date(b.zi).getTime();
  }
}
