import { Component, OnInit } from '@angular/core';
import { EstatusServidorService } from 'src/app/catalogos/estatus-servidor/estatus-servidor.service';
import { estatusEjecucion } from 'src/app/catalogos/model';
import { actividad, responsablesActividad, tiposActividad } from '../../actividades.model';
import { ActividadesService } from '../../actividades.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  tiposActividad: tiposActividad[]
  responsablesActividad: responsablesActividad[] 
  actividades: actividad[]
  estatusEjecuciones: estatusEjecucion[]
  
  constructor(private backend: ActividadesService, private backendEstatus: EstatusServidorService) { }

  ngOnInit(): void {
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

}


/*
fecha inicio
fecha fin
estatus
tipodeactividad

*/