import { Component, OnInit } from '@angular/core';
import { usuarioDestino } from '../models';
import { UsuarioDestinoService } from '../usuario-destino.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  listado: usuarioDestino [] 
  cargando = true

  constructor(private usuarioDestinoService: UsuarioDestinoService) { }

  async ngOnInit(){
    this.cargando = true
    this.listado = await this.usuarioDestinoService.getAll().toPromise()
    this.listado
    this.cargando = false
  }

}
