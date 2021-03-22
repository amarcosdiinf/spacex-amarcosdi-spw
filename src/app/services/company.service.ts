import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  
  constructor(private httpClient: HttpClient) { }

  getCompanyInfo(): Observable<any> {
    return this.httpClient.get("https://api.spacexdata.com/v4/company/")
  }
}
