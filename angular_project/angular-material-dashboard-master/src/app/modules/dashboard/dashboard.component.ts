import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../service/dashboard/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  ChemicalQuarterLyViews = [];
  pieChart = [];
  lineChart = [];


  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.ChemicalQuarterLyViews();
    this.dashboardService.pieChart();
    this.dashboardService.lineChart();
  }

}
