import { Component, OnInit } from '@angular/core';
import { Fly } from 'src/app/fly';
import { FlightsApiConService } from 'src/app/services/flights-api-con.service';

@Component({
  selector: 'app-sbar',
  templateUrl: './sbar.component.html',
  styleUrls: ['./sbar.component.css']
})
export class SbarComponent implements OnInit {
  fromText:string;
  toText:string;
  filteredFlights:Fly[];
  flightsArray:Fly[];

  constructor(private flightService:FlightsApiConService) { }

  ngOnInit(): void {
    this.flightService.getFlights().subscribe((flights) => this.flightsArray = flights)
    this.flightsArray.sort(this.sortArray);
  }
  sortArray(a:Fly,b:Fly) {
    return new Date(a.zi).getTime() - new Date(b.zi).getTime();
  }

  changeValues(){
    let text:string;
    text = this.fromText;
    this.fromText = this.toText;
    this.toText = text;
    this.filter();
  }
  filter(){
    if(!this.toText && this.fromText){
      this.filteredFlights = this.flightsArray.filter(a => a.orasPlecare.toLocaleLowerCase().includes(this.fromText.toLocaleLowerCase()));
      return;
    } else if(this.toText && !this.fromText){
      this.filteredFlights = this.flightsArray.filter(a => a.orasAterizare.toLocaleLowerCase().includes(this.toText.toLocaleLowerCase()));
      return;
    }else if(this.toText && this.fromText){
      this.filteredFlights = this.flightsArray.filter(a => a.orasAterizare.toLocaleLowerCase().includes(this.toText.toLocaleLowerCase()) && a.orasPlecare.toLocaleLowerCase().includes(this.fromText.toLocaleLowerCase()));
    }else{
      this.filteredFlights = [];
    }
    
  }

}
