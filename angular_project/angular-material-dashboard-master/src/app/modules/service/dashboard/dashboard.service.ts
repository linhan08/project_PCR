import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Chart} from '../../auth/model/chart.model';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private baseUrl = 'http://localhost:8200/report/api/';
  constructor(private http: HttpClient) { }

  chemicalChart(): Observable<Chart[]> {
      return this.http.get<Chart[]>(`${this.baseUrl}/chemical/chart`);
    }

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
