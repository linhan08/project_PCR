import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChemicalsService {

  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) {
  }

  getChemicalList(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + 'chemicals-list');
  }

  createChemical(chemical: object): Observable<object> {
    return this.http.post(`${this.baseUrl}` + 'save-chemical', chemical);
  }

  deleteChemical(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete-chemical/${id}`, {responseType: 'text'});
  }

  getChemical(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/chemical/${id}`);
  }

  updateChemical(id: number, value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}/update-chemical/${id}`, value);
  }
}
