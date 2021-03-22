import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { find } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NavesService {

  constructor(private httpClient: HttpClient) { }

  getNaves(): Observable<any> {
    return this.httpClient.get("https://api.spacexdata.com/v4/rockets/");
  }

  getNave(id: string): Observable<any> {
    return this.httpClient.get("https://api.spacexdata.com/v4/rockets/" + id);
  }
}
