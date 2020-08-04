import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StatusService {

  private baseUrl = 'http://localhost:8080/report/api/';

  constructor(private http: HttpClient) {
  }

  testReportviews(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + 'test');
  }

  // getTest(id: number): Observable<Object> {
  //   return this.http.get(`${this.baseUrl}/student/${id}`);
  // }

}
