import { Component, OnInit } from '@angular/core';
import { estatusEjecucion } from '../../model';
import { EstatusEjecucionService } from '../estatus-ejecucion.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  estatusEjecuciones: estatusEjecucion[]
  constructor(private backend: EstatusEjecucionService) { }

  ngOnInit(): void {
  }

  getAll(){
    this.backend.all().subscribe(x => this.estatusEjecuciones = x)
  }

}
