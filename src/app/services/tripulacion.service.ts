import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Astronauta } from '../modelos/astronauta.model';

@Injectable({
  providedIn: 'root'
})
export class TripulacionService {

  crew;
  constructor(private httpClient: HttpClient) { 
    let data = this.httpClient.get("https://api.spacexdata.com/v4/crew");
    this.crew = data;
  }

  getTripulacion(){
    return this.crew;
  }

  getTripulante(id_tripulante){
    return this.crew.find( tripulante => tripulante.id === id_tripulante);
  }
}
