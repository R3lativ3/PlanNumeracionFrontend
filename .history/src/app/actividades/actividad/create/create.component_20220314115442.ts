import { Component, OnInit } from '@angular/core';
import { periodicidad } from 'src/app/catalogos/model';
import { PeriodicidadService } from 'src/app/catalogos/periodicidad/periodicidad.service';
import Swal from 'sweetalert2';
import { actividadPost, responsablesActividad, tiposActividad } from '../../actividades.model';
import { ActividadesService } from '../../actividades.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {


  loading: boolean = true

  actividad: actividadPost = {
    nombreActividad: '',
    descripcion: '',
    estatus: 0,
    rma: 0,
    idPeriodicidad: 0,
    idResponsableActividad: 0,
    idTipoActividad: 0
  }

  tiposActividad: tiposActividad[]
  responsablesActividad: responsablesActividad[]
  periodicidades: periodicidad[]

  constructor(private backend: ActividadesService, private PeriodicidadesService: PeriodicidadService) { }

  ngOnInit(): void {
    this.getPeriodicidades()
    this.getResponsables()
    this.getTiposActividad()
  }

  create(){
    this.backend.createActividad(this.actividad).subscribe(x => {
      if(x.status === 0 )
      {
        Swal.fire({ title: 'Actividad Creada', icon: 'success', text: x.message })
      }
      else
      {
        Swal.fire({ title: 'Error agregando Actividad', icon: 'error', text: x.message })
      }
    }, (err) =>{
      Swal.fire({
        title: 'Ejecucion Actividad',
        icon: 'error',
        text: err
      })
    })
  }

  getPeriodicidades(){
    this.PeriodicidadesService.all().subscribe(x => {
      this.periodicidades = x
      this.loading = false
    })
  }

  getResponsables(){
    this.backend.getResponsableActividad().subscribe(x => this.responsablesActividad = x)
  }

  getTiposActividad(){
    this.backend.getTipoActividad().subscribe(x => this.tiposActividad = x)
  }

  getModel(){
    return this.actividad
  }
  
}
