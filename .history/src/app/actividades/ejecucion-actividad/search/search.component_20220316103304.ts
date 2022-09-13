import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EstatusServidorService } from 'src/app/catalogos/estatus-servidor/estatus-servidor.service';
import { estatusEjecucion, periodicidad } from 'src/app/catalogos/model';
import { PeriodicidadService } from 'src/app/catalogos/periodicidad/periodicidad.service';
import { actividad, busquedaEjecuciones, responsablesActividad, tiposActividad } from '../../actividades.model';
import { ActividadesService } from '../../actividades.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  loading: boolean = true
  busqueda: busquedaEjecuciones = {}
  
  tiposActividad: tiposActividad[]
  responsablesActividad: responsablesActividad[] 
  actividades: actividad[]
  estatusEjecuciones: estatusEjecucion[]
  periodicidades: periodicidad[]

  @Output() event = new EventEmitter<busquedaEjecuciones>()
  
  constructor(private backend: ActividadesService, private backendEstatus: EstatusServidorService, private PeriodicidadesService: PeriodicidadService) { }

  ngOnInit(): void {
    this.getResponsables()
    this.getTipoActividad()
    this.getActividades()
    this.getEstatus()
    this.getPeriodicidades()
  }

  sendSearch(){

  }

  getData(){
    return this.busqueda
  }

  getResponsables(){
    this.backend.getResponsableActividad().subscribe(x => {
      this.responsablesActividad = x;
    })
  }

  getTipoActividad(){
    this.backend.getTipoActividad().subscribe(x => {
      this.tiposActividad = x
    })
  }

  getActividades(){
    this.backend.allActividades().subscribe(x => {
      this.actividades = x
    })
  }

  getEstatus(){
    this.backendEstatus.all().subscribe(x => {
      this.estatusEjecuciones = x
      console.log(x)
    })
  }

  getPeriodicidades(){
    this.PeriodicidadesService.all().subscribe(x => {
      this.periodicidades = x
      this.loading = false
      console.log(x)
    })
  }

}