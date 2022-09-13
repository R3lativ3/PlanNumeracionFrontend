import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js'
import { MultiDataSet, Label } from 'ng2-charts'

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

  constructor() { }

  ngOnInit(): void {
  }

}
