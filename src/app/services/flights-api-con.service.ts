import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Fly } from '../fly';
import { Observable } from 'rxjs';
import { FlyBook } from '../FlyBook';

const httpOptions={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class FlightsApiConService {
  private apiURL = 'http://localhost:5000/flights';
  private apiURLOrders = 'http://localhost:5000/flightsbook';
  constructor(private http:HttpClient) { }
  getFlights():Observable<Fly[]>{
    return this.http.get<Fly[]>(this.apiURL);
  }
  addOrder(flyBook:FlyBook):Observable<FlyBook>{
    return this.http.post<FlyBook>(this.apiURLOrders, flyBook, httpOptions);
  }
  addPassagers(flight:Fly):Observable<Fly>{
    const url = `${this.apiURL}/${flight.id}`
    return this.http.put<Fly>(url, flight, httpOptions);
  }
  deleteFlight(flight:Fly):Observable<Fly>{
    const url = `${this.apiURL}/${flight.id}`
    return this.http.delete<Fly>(url);
  }
}
