import { Component, OnInit } from '@angular/core';
import { actividad } from '../../actividades.model';
import { ActividadesService } from '../../actividades.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  actividades: actividad[]
  loading: boolean = true

  constructor(private backend: ActividadesService) { }

  ngOnInit(): void {
    this.getActividades()
  }

  getActividades(){
    return this.backend.allActividades().subscribe(x => {
      this.actividades = x
      this.loading = false
    })
  }
/*
  download(){
    this.backend.advancedSearchDownloadFile().subscribe(data => {
      console.log(data)
      const blob = new Blob([data], {
        type: 'application/zip'
      })
      const url = window.URL.createObjectURL(blob)
      window.open(url)
    })
  }*/

}
