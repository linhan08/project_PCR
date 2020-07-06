import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1';

  constructor(private http: HttpClient) { }

  getAllEmployee(): Observable<Employee[]> {
    // return this.http.get<Employee[]>(this.baseUrl + '/employees');
    return this.http.get<Employee[]>(`${this.baseUrl}/employees`);
  }

  addEmployee(emp): Observable<Employee> {
    return this.http.post<Employee>(`${this.baseUrl}/employees`, emp);
  }

  getEmployeeById(id): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}/employees/${id}`);
  }

  updateEmployee(id, emp): Observable<Employee> {
    return this.http.put<Employee>(`${this.baseUrl}/employees/${id}`, emp);
  }

  deleteEmployeeById(id): Observable<Employee> {
    return this.http.delete<Employee>(`${this.baseUrl}/employees/${id}`);
  }
}
