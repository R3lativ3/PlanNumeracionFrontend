import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { usuarioDestino } from 'src/app/usuario-destino/models';
import { UsuarioDestinoService } from 'src/app/usuario-destino/usuario-destino.service';
import Swal from 'sweetalert2';
import { DestinoService } from '../destino.service';
import { destino } from '../models';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  loading = true
  destinos: destino[] = []

  constructor(private backend: DestinoService, private usuarioDestinoService: UsuarioDestinoService, private router: Router) { }

  ngOnInit() {
    this.getAll()
  }

  getAll(){
    this.backend.getAll().subscribe(x => {
      this.loading = false
      this.destinos = x
    })
  }


  showAlertDelete(id: number){
    Swal.fire({
      title: '¿Estas seguro que deseas eliminar este registro?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Continuar',
      cancelButtonText: 'Cancelar'
    }).then(async (result) => {
      if (result.isConfirmed) {
        const resp = await this.backend.delete(id).toPromise()
        if( resp.status === 0){
          Swal.fire("Eliminacion correcta",'','success')
          this.getAll()
          return
        }
        Swal.fire('Error', resp.message, 'error')
        return
      }
    })
  }


  async getCredentials(idDestino: number){
    let user = await this.usuarioDestinoService.getUsuarioByIdDestino(idDestino).toPromise()
    this.showCredentials(user, idDestino)
  }

  showCredentials(usuario: usuarioDestino, id: number){
    Swal.fire({
      title: '<strong>Credenciales</strong>',
      icon: 'info',
      html: "<p>Usuario con el que se conecta al equipo remoto</p></p> <p> <strong>Usuario: </strong> "+usuario.usuario+"</p><p> <strong>PSW: </strong> "+usuario.psw+"</p> ",
      showDenyButton: false,
      confirmButtonText: 'Editar',
      confirmButtonColor: 'Black'
    }).then((result) => {
      if(result.isConfirmed){
        this.router.navigate(['usuario-destino/edit/'+id]) // si no es estatus 1, quiere decir que lo creo, entonces redireccionar al estatus que trae la respuesta, el cual es el id del servidor creado
      }
    })
  }


}
