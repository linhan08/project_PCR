import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) {
  }

  getDeviceList(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + 'devices-list');
  }

  createDevice(device: object): Observable<object> {
    return this.http.post(`${this.baseUrl}` + 'save-device', device);
  }

  deleteDevice(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete-device/${id}`, {responseType: 'text'});
  }

  getDevice(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/device/${id}`);
  }

  updateDevice(id: number, value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}/update-device/${id}`, value);
  }
}
