import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Device} from '../../auth/model/device.model';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  private baseUrl = 'http://localhost:8200/report/api/';

  constructor(private http: HttpClient) {
  }

  deviceViews(): Observable<Device[]> {
    return this.http.get<Device[]>(`${this.baseUrl}/device`);
  }

  // getDevice(id: number): Observable<Device[]> {
  //   return this.http.get<Device[]>(`${this.baseUrl}/device/${id}`);
  // }
}
