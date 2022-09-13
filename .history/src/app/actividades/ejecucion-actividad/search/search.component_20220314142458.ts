import { Component, OnInit } from '@angular/core';
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
  constructor(private backend: ActividadesService) { }

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

  getEstatusEjecucion(){

  }

}


/*
fecha inicio
fecha fin
estatus
tipodeactividad

*/