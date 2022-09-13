import { Component, OnInit } from '@angular/core';
import { EstatusEjecucionService } from '../../estatus-ejecucion/estatus-ejecucion.service';
import { estatusServidor } from '../../model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  estatusServidor: estatusServidor[]
  
  constructor(private backend: EstatusEjecucionService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.backend.all().subscribe(x => this.estatusServidor = x)
  }
}
