import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private baseUrl = 'http://localhost:8080/auth/report/api/';
  constructor(private http: HttpClient) { }

    ChemicalQuarterLyViews(): Observable<any> {
      return this.http.get(`${this.baseUrl}` + 'chemical-quarter');
    }
  // areaChart() {
  //   return [{
  //     name: 'WizDx-COVID-19 Crystal Mix PCR Kit',
  //     data: [0, 635, 809, 947, 1402, 3634]
  //   }, {
  //     name: 'Berlin Procedure',
  //     data: [0, 107, 111, 133, 221, 767]
  //   }, {
  //     name: 'LightPower iVASARS_COV2 1stRT-rPCR Plus Kit',
  //     data: [0, 203, 276, 408, 547, 729]
  //   }, {
  //     name: 'QIAamp Viral RNA Mini QIAcube Kit ',
  //     data: [0, 90, 954, 156, 339, 818]
  //   }, {
  //     name: 'other',
  //     data: [0, 42, 62, 76, 153, 230]
  //   }];
  // }

  lineChart() {
      return [{
        name: 'Tổng số mẫu bệnh phẩm',
        data: [5, 3, 4, 7, 2]
    }, {
        name: 'Số mẫu được xét nghiệm',
        data: [2, 2, 3, 2, 1]
    }, {
        name: 'Số mẫu dự kiên sắp tới',
        data: [3, 4, 4, 2, 5]
    }];
  }

  pieChart() {
    return [{
      name: 'Số các bộ tham gia thực hiện',
      y: 61.40

    }, {
      name: 'Số các bộ đã được đào tạo thêm',
      y: 18.60
    }, {
      name: 'Số các bộ đã được đào tạo',
      y: 20.00
    }];
  }
}
