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
          name: 'CONTRATOS',
          data: [
                3042656, 
                6085311, 
                6085311, 
                6085311,
                6085311, 
                6085311, 
                6085311, 
                6085311,
                6085311,
                6085311,
                6085311,
                6085311
              ]
        },
        {
          name: 'CIERRE',
          data: [
                2636439, 
                5272878, 
                5272878, 
                5272878, 
                5272878, 
                5272878, 
                5272878, 
                5272878,
                5272878,
                5272878,
                5272878,
                5272878
              ]
        },
        {
          name: 'PROVISION',
          data: [
                741234, 
                1482468, 
                1482468, 
                1482468, 
                1482468, 
                1482468, 
                1482468, 
                1482468,
                1482468,
                1482468,
                1482468,
                1482468
              ]
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
      colors: ['#137eff', '#00b4d8','#caf0f8'],
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
          'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
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
