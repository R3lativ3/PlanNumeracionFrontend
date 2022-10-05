import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { usuarioDestino } from '../models';
import { UsuarioDestinoService } from '../usuario-destino.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: number 
  usuarioDestino: usuarioDestino={
    id: 5,
    usuario: '',
    psw:'',
    idPNNDestino: 20
  }
  index: "/destino"
  constructor(private route: ActivatedRoute, private usuarioDestinoService: UsuarioDestinoService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id']
      this.getUsuarioDestino(this.id)
      console.log(this.id)
    })
  }

  getUsuarioDestino(id:number){
    this.usuarioDestinoService.getUsuarioByIdDestino(id).subscribe(x => {
      console.log(x)
      this.usuarioDestino = x
    })
  }
  
  
  getusuarioDestinoById(){
    this.usuarioDestinoService.getUsuarioByIdDestino(this.id).subscribe({
      next: (res:any)=>{
        Swal.fire({
          title: res.message ,
          icon: 'success',
          showConfirmButton: false,
          timer: 2000,
          position:'center'
        })
        this.getUsuarioDestino(this.id);
      },
      error:(err)=>{
        Swal.fire({
        title: err.error.message,
        icon: 'error',
        timer: 4000,
        position:'center'
        }) 
      }  
    })
  }
  updateUsuarioDestino(){
    this.usuarioDestino.idPNNDestino = this.id
    console.log(this.usuarioDestino)
    this.usuarioDestinoService.updateUsuarioDestino(this.usuarioDestino).subscribe(x => {
      console.log(x)

      if( x.status === 0 ){
        Swal.fire({
          title: 'Usuario Destino Actualizado!',
          icon: 'success',
        }).then(() =>  this.router.navigate(['../../']) )
      }

      if( x.status === 1 ){
        Swal.fire({
          title: 'Error!',
          icon: 'error',
        })
      }
    }, err => console.log(err))
  }

  cancel(){
    return this.router.navigate([this.index])
  }

}
