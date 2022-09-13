import { Component, OnInit } from '@angular/core';
import { modeloHW } from '../../model';
import { ModeloHWService } from '../modelo-hw.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  modelosHW: modeloHW[]

  constructor(private backend: ModeloHWService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.backend.all().subscribe(x => this.modelosHW = x)
  }

}
