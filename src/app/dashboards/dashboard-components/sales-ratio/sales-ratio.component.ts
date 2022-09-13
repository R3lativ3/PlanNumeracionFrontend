import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexYAxis,
  ApexLegend,
  ApexXAxis,
  ApexTooltip,
  ApexTheme,
  ApexGrid,
  ApexFill, ApexNonAxisChartSeries, ApexStroke, ApexPlotOptions
} from 'ng-apexcharts';


// 
// Sales ratio
export type salesratioChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: any;
  theme: ApexTheme;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  colors: string[];
  markers: any;
  grid: ApexGrid;
  fill: ApexFill;
};

@Component({
  selector: 'app-sales-ratio',
  templateUrl: './sales-ratio.component.html',
  styleUrls: ['./sales-ratio.component.css']
})
export class SalesRatioComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent = Object.create(null);
  public salesratioChartOptions: Partial<salesratioChartOptions>;

  constructor() { 
    this.salesratioChartOptions = {
      series: [
        {
          name: 'Sales Ratio',
          data: [12.5,
            23.3,
            34.7,
            28.5,
            21.4,
            30.6,
            44.5,
            34]
        },
      ],
      chart: {
        fontFamily: 'Rubik,sans-serif',
        height: 230,
        type: 'line',
        toolbar: {
          show: false
        },
        dropShadow: {
          enabled: true,
          top: 3,
          left: 0,
          blur: 5,
          color: '#000',
          opacity: 0.2
        }
      },
      dataLabels: {
        enabled: false
      },
      markers: {
        size: 3,
        strokeColors: 'transparent',
      },
      stroke: {
        curve: 'smooth',
        lineCap: 'round',
        width: '3',
      },
      colors: ['#137eff'],
      fill: {
        opacity: 1
      },
      legend: {
        show: false,
      },
      grid: {
        show: true,
        strokeDashArray: 2,
        borderColor: 'rgba(0,0,0,0.1)',
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: true
          }
        }
      },
      xaxis: {
        type: 'category',
        categories: [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8
        ],
        labels: {
          style: {
            colors: '#a1aab2'
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: '#a1aab2'
          }
        }
      },
      tooltip: {
        theme: 'dark'
      }
    };
   }

  ngOnInit(): void {
  }

}
