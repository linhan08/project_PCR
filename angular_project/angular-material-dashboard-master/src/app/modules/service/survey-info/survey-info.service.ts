import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurveyInfoService {

  private baseUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) {
  }

  unit(unitId: number, value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}/${unitId}`, value);
  }

  testResult(testResultId: number, value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}/${testResultId}`, value);
  }

  employeeResult(employeeResultId: number, value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}/${employeeResultId}`, value);
  }

  deviceNeed(deviceTypeId: number, value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}/${deviceTypeId}`, value);
  }

  devices(deviceId: number, value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}/${deviceId}`, value);
  }

  chemicals(chemicalId: number, value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}/${chemicalId}`, value);
  }



}
