import { DashboardService } from 'src/app/modules/service/dashboard/dashboard.service';
import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  chartOptions: {};
  data: any = [];

  Highcharts = Highcharts;

  constructor(private dashboardService: DashboardService) {
    this.dashboardService.chemicalChart().subscribe(data => {
      this.data = data;
      this.chartOptions = {
        chart: {
          type: 'area'
        },
        title: {
          text: 'Sinh Phẩm thay đổi theo các quý'
        },
        subtitle: {
          text: ''
        },
        tooltip: {
          split: true,
          valueSuffix: ' millions'
        },
        credits: {
          enabled: false
        },
        exporting: {
          enabled: true,
        },
        series: this.data
      };

      HC_exporting(Highcharts);

      setTimeout(() => {
        window.dispatchEvent(
          new Event('resize')
        );
      }, 300);
    },error=>{});
   }

  ngOnInit() {

  }

}
