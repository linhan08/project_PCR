import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { GeneInfo } from '../../survey/models/model/gene-info.model';
import { TestInfo } from '../../survey/models/model/test-info.model';
import { EmployeeInfo } from '../../survey/models/model/employee-info.model';
import { DeviceInfo } from '../../survey/models/model/device-info.model';
import { DeviceNeed } from '../../survey/models/model/device-need.model';
import { ChemicalInfo } from '../../survey/models/model/chemical-info.model';
import { map } from 'rxjs/operators';
import 'rxjs/Rx';
@Injectable({
  providedIn: 'root'
})
export class SurveyInfoService {

     myPostBody = {
    unit: GeneInfo,
    testResult: TestInfo,
    employeeResult: EmployeeInfo,
    devices: DeviceInfo,
    deviceNeed: DeviceNeed,
    chemicals: ChemicalInfo
   }
  private baseUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) {
  }

  unit(myPostBody: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`, myPostBody)
                .pipe(map((response: Response) => <object>response.json()));
  }

}
