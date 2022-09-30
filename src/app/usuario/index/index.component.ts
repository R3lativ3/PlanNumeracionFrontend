import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { usuario } from '../models';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  listado: usuario[] = []
  loading = true
  constructor(private usuarioService: UsuarioService) { }

  async ngOnInit(){
    this.listado = await this.usuarioService.getAll().toPromise()
    this.loading = false
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
        const resp = await this.usuarioService.delete(id).toPromise()
        if( resp.Status === 0){
          Swal.fire("Eliminacion correcta",'','success')
          this.usuarioService.getAll().subscribe(x => this.listado = x)
          return
        }
        Swal.fire('Error', resp.Message, 'error')
        return
      }
    })
  }

}
