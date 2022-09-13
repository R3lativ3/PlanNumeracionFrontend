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
  actividadRealizar = ''
  responsableRealizar = ''

  ejecucion: ejecucionActividadPost 
  ejecucion2: ejecucionActividadPost[] = []


  actividades: actividad[]
  estatusEjecuciones: estatusEjecucion[]
  constructor(private backend: ActividadesService, private backendEstatus: EstatusEjecucionService) { }

  ngOnInit(): void {
    this.getActividades()
    this.getEstatus()
  }

  add(){
    this.ejecucion2.push(this.ejecucion)
    console.log(this.ejecucion2)
    console.log(this.ejecucion)
  }

  create(){
    this.backend.createEjecucionActividad(this.ejecucion2).subscribe(x => alert(x))
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
  
  getModel2(){
    return this.ejecucion2
  }

  onFileSelected(event: any) {
    const file:File = event.target.files[0];
    console.log(file)
    if (file) {
        this.ejecucion.archivoEvidencia = file;
        this.ejecucion.idServidor = 1300
    }
  }
}
