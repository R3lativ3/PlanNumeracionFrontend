import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexLegend,
  ApexStroke,
  ApexTooltip,
  ApexNonAxisChartSeries,
  ApexAxisChartSeries,
  ApexYAxis,
  ApexXAxis,
  ApexTheme,
  ApexFill,
  ApexGrid,
  ApexResponsive,
  ApexTitleSubtitle
} from 'ng-apexcharts';

export type yearlycompareChartOptions = {
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
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
};

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  @ViewChild("chart") chart4: ChartComponent = Object.create(null);
  public yearlycompareChartOptions: Partial<yearlycompareChartOptions>;

  constructor() { 

    this.yearlycompareChartOptions = {
      series: [
        {
          name: 'This Year',
          data: [5, 4, 5, 3, 12, 4, 15, 8, 10, 8, 7, 5]
        },
        {
          name: 'Next Year',
          data: [4, 10, 5, 4, 8, 3, 3, 4, 9, 7, 10, 4]
        },
        {
          name: 'lolis Year',
          data: [3, 4, 3, 4, 3, 5, 3, 3, 3, 3, 13, 3]
        }
      ],
      chart: {
        fontFamily: 'Rubik,sans-serif',
        height: 280,
        type: 'bar',
        stacked: true,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          columnWidth: '50%',
          barHeight: '40%',
        }
      },
      dataLabels: {
        enabled: false
      },
      markers: {
        size: 3,
      },
      stroke: {
        curve: 'straight',
        width: '0',
      },
      colors: ['#137eff', '#e9ecef'],
      legend: {
        show: false,
      },
      grid: {
        show: true,
        strokeDashArray: 2,
        borderColor: 'rgba(0,0,0,0.1)',
      },
      fill: {
        opacity: 1
      },
      xaxis: {
        type: 'category',
        categories: [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
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
