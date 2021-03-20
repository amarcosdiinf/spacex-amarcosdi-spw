import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { find } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NavesService {

  constructor(private httpClient: HttpClient) { }

  getNaves(){
    return this.httpClient.get("https://api.spacexdata.com/v4/ships/");
  }

  getNave(id: string){
    return this.httpClient.get("https://api.spacexdata.com/v4/ships/" + id);
  }
}
