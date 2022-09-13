import { Component, OnInit } from '@angular/core';
import { EstatusEjecucionService } from 'src/app/catalogos/estatus-ejecucion/estatus-ejecucion.service';
import { estatusEjecucion } from 'src/app/catalogos/model';
import { actividad, ejecucionActividadPost } from '../../actividades.model';
import { ActividadesService } from '../../actividades.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  loading: boolean = false
  ejecucion: ejecucionActividadPost 


  actividades: actividad[]
  estatusEjecuciones: estatusEjecucion[]
  constructor(private backend: ActividadesService, private backendEstatus: EstatusEjecucionService) { }

  ngOnInit(): void {
    this.loading = true
    this.getActividades()
    this.getEstatus()
    this.loading = false
  }

  create(){

  }

  getActividades(){
    this.backend.allActividades().subscribe(x => this.actividades = x)
  }

  getEstatus(){
    this.backendEstatus.all().subscribe(x => this.estatusEjecuciones = x)
  }

  getModel(){
    return this.ejecucion
  }
}
