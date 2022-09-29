import { Component, OnInit } from '@angular/core';
import { validacionCarga } from '../models';
import { ValidacionCargaService } from '../validacion-carga.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  listado: validacionCarga[] = []
  cargando = true
  constructor(private validacionCargaService: ValidacionCargaService) { 

  }

  async ngOnInit(){
    this.cargando = true
    this.listado =await this.validacionCargaService.getAll().toPromise()
    this.listado
    this.cargando = false
  }

}
