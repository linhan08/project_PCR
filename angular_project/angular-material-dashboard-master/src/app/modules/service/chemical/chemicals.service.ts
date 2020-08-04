import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChemicalsService {

  private baseUrl = 'http://localhost:8080/report/api/';

  constructor(private http: HttpClient) {
  }

  chemicalViews(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + 'chemical');
  }


}
