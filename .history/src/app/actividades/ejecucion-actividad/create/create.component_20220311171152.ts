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

  loading: boolean = true
  ejecucion: ejecucionActividadPost = {
    rfc: '',
    observaciones: '',
    idActividadServidor: 0,
    idServidor: 0,
    idEstatusEjecucion: 0
  } 


  actividades: actividad[]
  estatusEjecuciones: estatusEjecucion[]
  constructor(private backend: ActividadesService, private backendEstatus: EstatusEjecucionService) { }

  ngOnInit(): void {
    this.getActividades()
    this.getEstatus()
  }

  create(){

  }

  setName(event:any){
    alert(event.target.innerText)
  }

  getActividades(){
    this.backend.allActividades().subscribe(x => {
      console.log(x)
      this.actividades = x
      this.loading = false
    })
  }

  getEstatus(){
    this.backendEstatus.all().subscribe(x => {
      this.estatusEjecuciones = x
      console.log(x)
    })
  }

  getModel(){
    return this.ejecucion
  }
}
