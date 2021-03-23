import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanzamientosService {

  constructor(private httpClient: HttpClient) { }

  getLanzamientos(): Observable<any> {
    return this.httpClient.get("https://api.spacexdata.com/v4/launches/");
  }

  getLanzamiento(id: string): Observable<any> {
    return this.httpClient.get("https://api.spacexdata.com/v4/launches/" + id);
  }

  getUpcomingLanzamiento(): Observable<any> {
    return this.httpClient.get("https://api.spacexdata.com/v4/launches/next/");
  }



}
