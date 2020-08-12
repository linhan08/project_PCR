
import { Employee } from './../../auth/model/employee.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private baseUrl = 'http://localhost:8200/report/api/';

  constructor(private http: HttpClient) {
  }

  employeeResulViews(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}/employee`);
  }
  // getEmployee(id: number): Observable<Object> {
  //   return this.http.get(`${this.baseUrl}/employee/${id}`);
  // }
}
