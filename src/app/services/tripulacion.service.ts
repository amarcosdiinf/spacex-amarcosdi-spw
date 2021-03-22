import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Astronauta } from '../modelos/astronauta.model';

@Injectable({
  providedIn: 'root'
})
export class TripulacionService {

  constructor(private httpClient: HttpClient) { }

  getTripulacion(): Observable<any> {
    return this.httpClient.get("https://api.spacexdata.com/v4/crew/");
  }

  getTripulante(id_tripulante): Observable<any> {
    return this.httpClient.get("https://api.spacexdata.com/v4/crew/" + id_tripulante);
  }
}
