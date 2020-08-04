import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  private baseUrl = 'http://localhost:8080/report/api/';

  constructor(private http: HttpClient) {
  }

  deviceViews(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + 'device');
  }

  getDevice(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/device/${id}`);
  }
}
