import { Component, OnInit, Input } from '@angular/core';
import { Fly } from 'src/app/fly';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  @Input() fly:Fly;
  constructor() { }

  ngOnInit(): void {
  }

}
