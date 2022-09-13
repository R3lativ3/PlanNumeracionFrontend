import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServidorBasicInfo } from 'src/app/app.models';
import { EstatusEjecucionService } from 'src/app/catalogos/estatus-ejecucion/estatus-ejecucion.service';
import { estatusEjecucion } from 'src/app/catalogos/model';
import Swal from 'sweetalert2';
import { actividad, ejecucionActividadPost } from '../../actividades.model';
import { ActividadesService } from '../../actividades.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  loading: boolean = true
  actividadRealizar = ''
  responsableRealizar = ''

  ejecucion: ejecucionActividadPost = {
    fechaEjecucion: new Date(),
    rfc: '',
    observaciones: '',
    idActividadServidor: 0,
    idServidor: 0,
    idEstatusEjecucion: 0
  }

  actividades: actividad[]
  estatusEjecuciones: estatusEjecucion[]
  constructor(private backend: ActividadesService, private backendEstatus: EstatusEjecucionService, private router: Router) { }

  ngOnInit(): void {
    this.getActividades()
    this.getEstatus()
  }

  create(){
    this.backend.createEjecucionActividad(this.ejecucion).subscribe(x => {
      if(x.status === 0 )
      {
        Swal.fire({ title: 'Ejecucion de Actividad Agregada', icon: 'success', text: x.message })
      }
      else
      {
        Swal.fire({ title: 'Error agregando Actividad', icon: 'error', text: x.message })
      }
      this.router.navigate(['/actividades/'])
    }, (err) =>{
      Swal.fire({
        title: 'Ejecucion de Actividad Agregada',
        icon: 'error',
        text: err
      })
    })
  }

  setName(event:any){
    this.actividades.filter(x => x.id == event.target.value).map(z => {
      this.actividadRealizar = z.nombreActividad
      this.responsableRealizar = z.responsable
    })
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
  
  onFileSelected(event: any) {
    const file:File = event.target.files[0];
    if (file) {
        this.ejecucion.archivoEvidencia = file;
        console.log(this.ejecucion.archivoEvidencia)
        this.ejecucion.idServidor = 1300
    }
  }

  receiveMessage($event: number){
    this.ejecucion.idServidor = $event
  }

}
