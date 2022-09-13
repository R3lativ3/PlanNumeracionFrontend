import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js'
import { MultiDataSet, Label, Color } from 'ng2-charts'

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
    { backgroundColor:['#137eff', '#00b4d8','#8d99ae']},

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
