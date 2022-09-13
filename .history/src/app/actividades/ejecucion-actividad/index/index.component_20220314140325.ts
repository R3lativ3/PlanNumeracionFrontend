import { Component, OnInit } from '@angular/core';
import { ejecucionActividad } from '../../actividades.model';
import { ActividadesService } from '../../actividades.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  ejecuciones: ejecucionActividad[]
  loading: boolean = true

  constructor(private backend: ActividadesService) { }

  ngOnInit(): void {
    this.get()
  }

  get(){
    return this.backend.allActividades().subscribe(x => {
      this.ejecuciones = x
      this.loading = false
    })
  }
}
