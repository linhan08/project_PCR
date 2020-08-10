import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SurveyInfoService {

  private baseUrl = 'http://localhost:8080/survey/api/v1';

  constructor(private http: HttpClient) {
  }

  unitReport(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + '/');
  }

  testResult(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + '/');
  }

  employeeResult(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + '/');
  }

  deviceNeed(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + '/');
  }

  deviceReports(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + '/');
  }

  chemicalReports(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + '/');
  }

}
