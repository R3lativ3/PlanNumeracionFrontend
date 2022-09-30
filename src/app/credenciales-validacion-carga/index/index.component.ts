import { Component, OnInit } from '@angular/core';
import { credencialesValidacionCarga } from '../models';
import { CredencialesValidacionCargaService } from '../credenciales-validacion-carga.service';



@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  listado:credencialesValidacionCarga[]
  cargando = true
  constructor(private credencialesValidacionCargaService:CredencialesValidacionCargaService) { }

async  ngOnInit(){
    this.cargando = true
    this.listado = await this.credencialesValidacionCargaService.getAll().toPromise()
    console.log(this.listado)
    this.cargando = false

  }

}
