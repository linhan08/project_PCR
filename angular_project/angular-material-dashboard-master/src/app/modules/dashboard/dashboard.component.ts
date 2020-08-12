import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../service/dashboard/dashboard.service';
import { Chart } from 'highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  listchemicalChart: any;
  pieChart = [];
  lineChart = [];
  // areaChart = [];

  constructor(private dashboardService: DashboardService) {
    // this.dashboardService.chemicalChart().subscribe(data =>{
    //   this.listchemicalChart = data;
    // },error=>{});
   }

  ngOnInit() {
    // this.listchemicalChart = this.dashboardService.chemicalChart();
    this.dashboardService.chemicalChart().subscribe(data => {
      this.listchemicalChart = data;
    },error=>{});
    // this.dashboardService.chemicalChart();
    this.pieChart = this.dashboardService.pieChart();
    this.lineChart = this.dashboardService.lineChart();
  }
  // i : number;
  // areaChart() {
  //   for (const emp in this.listchemicalChart){
  //     console.log(this.listchemicalChart(emp));
  //     return [{
  //       name:
  //     }]
  //   }
  //   }
  //   return [{
  //     name: 'WizDx-COVID-19 Crystal Mix PCR Kit',
  //     data: [0, 635, 809, 947, 1402, 3634]
  //   }, {
  //     name: 'Berlin Procedure',
  //     aaa: [0, 107, 111, 133, 221, 767]
  //   }, {
  //     name: 'LightPower iVASARS_COV2 1stRT-rPCR Plus Kit',
  //     aaa: [0, 203, 276, 408, 547, 729]
  //   }, {
  //     name: 'QIAamp Viral RNA Mini QIAcube Kit ',
  //     aaa: [0, 90, 954, 156, 339, 818]
  //   }, {
  //     name: 'other',
  //     aaa: [0, 42, 62, 76, 153, 230]
  //   }];
  // }

  }
