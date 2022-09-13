import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartType } from 'chart.js'

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
import { Label, MultiDataSet } from 'ng2-charts';

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
  public doughnutChartLabels: Label[] = ['Descuento por aplicar C.P.2', 'Descuento por aplicar L  ']
  public doughnutChartData: MultiDataSet = [
    [812745984,984961571],
  ]
  public doughnutChartType: ChartType = 'doughnut'
  public chartColors: any[] = [
    { backgroundColor:['#137eff', '#00b4d8']},

  ];

  @ViewChild("chart") chart4: ChartComponent = Object.create(null);
  public yearlycompareChartOptions: Partial<yearlycompareChartOptions>;

  constructor() {

    
    this.yearlycompareChartOptions = {
      series: [
        {
          name: 'Aplicar C.P.2',
          data: [
                720176165, 
                99949649, 
                -67728832, 
                -10469718, 
                 3436471,  
                -346582, 
                 67728832, 
                ]
        },
        {
          name: 'APLICAR L.P.',
          data: [
                898072479, 
                158179387, 
                0, 
                -11803349,
                8414423, 
                -172538, 
                -67728832
              ]
        },
      ],
      chart: {
        fontFamily: 'Rubik,sans-serif',
        height: '500px',
        type: 'bar',
        stacked: true,
        toolbar: {
          show: true
        }
      },
      plotOptions: {
        bar: {
          columnWidth: '50%',
          barHeight: '60%',
          
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
      colors: ['#137eff', '#00b4d8'],
      legend: {
        show: true,
      },
      grid: {
        show: true,
        strokeDashArray: 2,
        borderColor: 'rgba(0,0,0,0.1)',
      },
      fill: {
        opacity: 4
      },
      xaxis: {
        type: 'category',
        categories: [
          'ENDING BALANCE AS OF DECEMBER 31', 'Discount', 'Notas de Crédito Amortization', 'Cancelations', 
          'TRUE UP Discount', 'TRUE UP Cancellations', 'Reclasification'
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
            colors: '#001219'
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
