import { Component, OnInit, Input } from '@angular/core';
import { Fly } from 'src/app/fly';
import { ActivatedRoute } from '@angular/router';
import { FlightsApiConService } from 'src/app/services/flights-api-con.service';

@Component({
  selector: 'app-flightbook',
  templateUrl: './flightbook.component.html',
  styleUrls: ['./flightbook.component.css']
})
export class FlightbookComponent implements OnInit {
  name:string;
  email:string;
  nrPers:number = 1;
  flight:Fly | undefined;
  constructor(private route:ActivatedRoute, private flightService:FlightsApiConService) { }
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const FlightId = String(routeParams.get('flightId'));
    this.flightService.getFlights().subscribe((flights) => this.flight = flights.find(a => a.id === FlightId));
  }

  bookOrder(){
    if(this.flight?.locuriOcupate != this.flight?.locuriTotale){
    if(!this.name && !this.email){
      alert("Insert Name and Email!")
      return;
    }

    const order = {flightId:this.flight?.id, clientName: this.name, clientEmail:this.email, persoane:this.nrPers};

    if(this.flight!=undefined){
      let locuri = Number(this.flight.locuriOcupate) + Number(this.nrPers);
      if(locuri <= this.flight.locuriTotale){
        this.flight.locuriOcupate = locuri;
        this.flightService.addOrder(order).subscribe();
        this.flightService.addPassagers(this.flight).subscribe();
      }else{
        alert("Not enouth seats!")
      }
      if(locuri >= this.flight.locuriTotale){
        this.flightService.deleteFlight(this.flight).subscribe()
      }
    }
  }
  }

}
