import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() label: string;
  @Input() total: string;
  @Input() percentage: string;
  @Input() data = [];
  chartOptions= {};
  Highcharts = Highcharts;
  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
          type: 'area',
          backgroundColor: null,
          borderwidth: 0,
          margin: [2, 2, 2, 2],
          heigh: 200
      },
      title: {
          text: 'null'
      },
      subtitle: {
          text: 'null'
      },
      tooltip: {
          split: true,
          outside: true
      },
      legend: {
        enabled: false,
      },
      credits: {
        enabled: false,
      },
      exporting: {
        enabled: false,
      },
      xAxis: {
        labels: {
          enabled: false,
        },
        title: {
          text: null
        },
        startOnTrick: false,
        endOnTrick: false,
        tickOptions: []
      },
      yAxis: {
        labels: {
          enabled: false,
        },
        title: {
          text: 'null'
        },
        startOnTrick: false,
        endOnTrick: false,
        tickOptions: []
      },
      series: [{
          data: this.data
      }]
    };

    HC_exporting(this.Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
