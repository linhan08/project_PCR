import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import {customer} from '../model/customer.model';
@Injectable({
  providedIn: 'root'
})
export class customerService {
  baseUrl = 'http://localhost:8080/api/customer';

  constructor(private http: HttpClient) { }

  getCustomerList(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + 'customers-list');
  }

  createCustomer(customer: object): Observable<object> {
    return this.http.post(`${this.baseUrl}` + 'save-customer', customer);
  }

  deletecustomer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete-customer/${id}`, {responseType: 'text'});
  }

  getCustomer(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/customer/${id}`);
  }

  updateCustomer(id: number, value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}/update-customer/${id}`, value);
  }
}
