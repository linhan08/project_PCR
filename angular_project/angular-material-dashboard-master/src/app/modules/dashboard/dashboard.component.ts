import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../service/dashboard/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  areaChart = [];
  pieChart = [];
  lineChart = [];


  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.areaChart = this.dashboardService.areaChart();
    this.pieChart = this.dashboardService.pieChart();
    this.lineChart = this.dashboardService.lineChart();
  }

}
