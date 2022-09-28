import { Component, OnInit } from '@angular/core';
import { usuario } from '../models';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  listado: usuario[] = []
  cargando = true
  constructor(private usuarioService: UsuarioService) { }

  async ngOnInit(){
    this.cargando = true
    this.listado = await this.usuarioService.getAll().toPromise()
    this.listado
    this.cargando = false
  }

}
