import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js'
import { MultiDataSet, Label, Color } from 'ng2-charts'

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  public doughnutChartLabels: Label[] = ['doas', 'asdasd','asdakakakka']
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100],
    [50, 150, 120],
    [250, 130, 70],
  ]
  public doughnutChartType: ChartType = 'doughnut'
  public chartColors: any[] = [
    { 
      backgroundColor:['#137eff', '#00b4d8','#8d99ae', '#137eff', '#00b4d8','#8d99ae'],

    }];

  constructor() { }

  ngOnInit(): void {
  }

}
