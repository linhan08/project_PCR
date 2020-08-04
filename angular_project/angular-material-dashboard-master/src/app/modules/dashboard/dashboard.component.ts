import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../service/dashboard/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart = [];
  pieChart = [];
  lineChart = [];
  

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
    this.pieChart = this.dashboardService.pieChart();
    this.lineChart = this.dashboardService.lineChart();
  }
  
}
