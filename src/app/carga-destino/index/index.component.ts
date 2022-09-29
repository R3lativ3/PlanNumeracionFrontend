import { Component, OnInit } from '@angular/core';
import { CargaDestinoService } from '../carga-destino.service';
import { cargaDestino } from '../models';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  listado:cargaDestino[]
  cargando=true

  constructor(private cargaDestinoService:CargaDestinoService) { }

  async ngOnInit(){
    this.cargando = true
    this.listado = await this.cargaDestinoService.getAll().toPromise()
    console.log(this.listado)
    this.cargando = false
  }

}
