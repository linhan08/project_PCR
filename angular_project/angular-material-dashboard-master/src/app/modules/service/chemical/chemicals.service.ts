import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Chemical} from '../../auth/model/chemical.model';

@Injectable({
  providedIn: 'root'
})
export class ChemicalsService {

  private baseUrl = 'http://localhost:8200/report/api/';

  constructor(private http: HttpClient) {
  }

  chemicalViews(): Observable<Chemical[]> {
    return this.http.get<Chemical[]>(`${this.baseUrl}/chemical`);
  }


}
