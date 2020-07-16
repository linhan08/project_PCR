import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import {Car} from '../model/car.model';
@Injectable({
  providedIn: 'root'
})
export class CarService {
  baseUrl = 'http://localhost:8080/api/car';

  constructor(private http: HttpClient) { }

  getCarList(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + 'cars-list');
  }

  createCar(car: object): Observable<object> {
    return this.http.post(`${this.baseUrl}` + 'save-car', car);
  }

  deleteCar(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete-car/${id}`, {responseType: 'text'});
  }

  getCar(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/car/${id}`);
  }

  updateCar(id: number, value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}/update-car/${id}`, value);
  }
}