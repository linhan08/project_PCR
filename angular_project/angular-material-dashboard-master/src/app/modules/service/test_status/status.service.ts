import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, from} from 'rxjs';
import {Status_test} from '../../auth/model/status_test.model';
@Injectable({
  providedIn: 'root'
})
export class StatusService {

  private baseUrl = 'http://localhost:8200/report/api/';

  constructor(private http: HttpClient) {
  }

  testReportviews(): Observable<Status_test[]> {
    return this.http.get<Status_test[]>(`${this.baseUrl}/test`);
  }

  // getTest(id: number): Observable<Object> {
  //   return this.http.get(`${this.baseUrl}/student/${id}`);
  // }

}
